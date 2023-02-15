export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  taxes?: number;
}

//! Interfaz exclusiva para método POST por la lógica de la API y la BBDD
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  //* Nos traemos todos los campos, excepto el ID y la category
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
//* Todos los atributos son opcionales
