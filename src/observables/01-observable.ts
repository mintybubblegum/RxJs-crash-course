import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
    
}

//const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {

    subs.next('Hi');
    subs.next('I am a pie');

    subs.next('Hi');
    subs.next('I am a pie');

    //Forzar un error
    //const a = undefined;
    //a.nombre = 'Fernando';

    subs.complete();

    subs.next('Hi');
    subs.next('I am a pie');
} );


obs$.subscribe( observer );