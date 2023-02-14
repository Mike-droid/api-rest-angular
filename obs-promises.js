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
