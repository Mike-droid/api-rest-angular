# Curso de Consumo de APIs REST con Angular

## Http Basic

### Lo que aprenderás para consumir API con Angular

[PDF slides del curso](https://static.platzi.com/media/public/uploads/slides-angular-apis_c59a4ce6-0c7e-4ddd-b671-61863634a81c.pdf)

[Repo del curso](https://github.com/platzi/angular-APIS)

Vamos a aprender a usar el módulo de Angular Http

### Solucitides GET

GET sirve para obtener información.

Usaremos [Fake API](https://young-sands-07814.herokuapp.com/docs)

Para poder hacer peticiones HTTP en angular, tenemos que impotar el módulo en app.module.ts:

`import { HttpClientModule } from '@angular/common/http';`

Después tenemos que crear un servicio para manejar estas peticiones. Por ejemplo está el archivo products.service.ts

### Detalle del producto

Usamos el output para mandarle información del componente hijo al padre y que muestre la información cuando hacemos click en el botón del componente hijo.

### Implementando slides

Utilizaremos [Swiper JS](https://swiperjs.com/angular)

### Solicitudes POST

Nota importante: *los verbos HTTP tienen un return porque el objetivo es utilizar el método subscribe para obtener la información*

No necesariamente vamos a utilizar el método POST con las interfaces definidas en nuestro código en TypeScript. Debemos hacer ciertas modificaciones. Para esto están los [DTOs o Data Transfer Objects](https://www.arquitecturajava.com/typescript-interface-y-angular-dtos/)

### Solicitudes PUT y PATCH

### Solicitudes DELETE

### Url Parameters / Paginación

### Observable vs. Promesa

Angular usa Observables en vez de promesas por estas ventajas:

```javascript
const { Observable } = require('rxjs');
const { filter } = require('rxjs/operators');

const doSomething = () => {
  return new Promise((resolve, reject) => {
    resolve('valor 1');
    resolve('valor 2'); //! no llega acá porque ya se resolvió
    setTimeout(() => {
      resolve('valor 3'); //! no llega acá porque ya se resolvió
    }, 2000);
  });
}

const doSomething$ = () => {
  return new Observable(observer => {
    observer.next('valor 1$');
    observer.next('valor 2$');
    observer.next('valor 3$');
    observer.next(null);
    setTimeout(() => {
      observer.next('valor 4$');
    }, 2000);
    setTimeout(() => {
      observer.next(null);
    }, 2500);
    setTimeout(() => {
      observer.next('valor 5$');
    }, 3000);
    //* podemos enviar varios datos porque estamos suscritos a ellos
  });
}

(async () => {
  const response = await doSomething();
  console.log(response);
})();

(() => {
  const obs$ = doSomething$();
  obs$.pipe(
    filter(value => value !== null)
  )
  .subscribe(response => {
    console.log(response);
  })
})();

```

### Reintentar una petición

Basta con usar `import { retry } from 'rxjs/operators';`

## Buenas prácticas

### El problema de CORS

El problema [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS) tiene que ver con el origen de la petición. Si es del mismo origen no hay problema, pero si el origen es distinto, surge este error.

Tenemos que hacer que el *backend* acepte distintos origenes.

Podemos crear un proxy en Angular **PERO** solo soluciona el error en desarrollo, no en producción.

### Manejo de ambientes

Angular (en sus versiones anteriores a la 15) nos muestra una carpeta de los ambientes. Siempre sulene ser 2:

1. Desarrollo
2. Producción (si usamos el proxy aquí, tendremos un error)

### Manejo de errores

### Transformar peticiones

## Auth

## Archivos

## Despedida
