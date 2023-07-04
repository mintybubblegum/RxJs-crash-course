import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval(
        () => subs.next( Math.random() ), 3000
    ); //quiero emitir un numero random cada segundo

    return () => clearInterval( intervalID );
    //para limpiar campo cuando se hace unsubscribe
});

/* 
* 1- distribuye misma información a múltiples Observable
* 2- implementa la interfaz Observer, proporciona métodos: next(), error() y complete() para recibir notificaciones de eventos.
*/
const subject$ = new Subject();
intervalo$.subscribe( subject$ );


/* const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) ); //un observable sólo se ejecuta cuando hay al menos una suscripción

const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) ); */

const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd) );//si le pasamos el intervalo$(observable) como Subject, conseguimos que los valores que se impriman sean parejas iguales de números random: 2,2,9,9,4,4...
const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd) );