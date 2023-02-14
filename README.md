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

## Buenas prácticas

## Auth

## Archivos

## Despedida
