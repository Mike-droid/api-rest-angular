import { Component, OnInit } from '@angular/core';

import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;

  //* es el producto que se muestra en grande cuando presionamos en 'ver detalle'
  chosenProduct: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: ''
    }
  }

  limit = 10;
  offset = 0;

  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.loadMore();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  showDetail(id: string) {
    this.statusDetail = 'loading';
    this.toggleProductDetail();
    this.productsService.getProduct(id).subscribe(data => {
      this.chosenProduct = data;
      this.statusDetail = 'success';
    }, errorMessage => {
      this.statusDetail = 'error'; //! Esto debe estar primero para que el Swal funcione
      Swal.fire({
        title: 'Product not found!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
      })
    })
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'new product by Mike',
      price: 999,
      images: ['lorem'],
      description: 'cool description',
      categoryId: 1
    };

    this.productsService.create(product).subscribe(data => {
      this.products.unshift(data);
    })
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'super new title'
    }
    const id = this.chosenProduct.id

    this.productsService.update(id, changes).subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.chosenProduct.id);
      this.products[productIndex] = data;
      this.chosenProduct = data;
    })
  }

  deleteProduct() {
    const id = this.chosenProduct.id;
    this.productsService.delete(id).subscribe(() => {
      const productIndex = this.products.findIndex(item => item.id === this.chosenProduct.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    })
  }

  loadMore() {
    this.productsService.getAllProducts(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

}
