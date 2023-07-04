import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const intervalNumbers$ = new Observable<number>( subs =>{

    //crear un contador, 1,2,3,4,5........
    let count = 0;

    const interval = setInterval( () =>{

        count++;
        subs.next(count);
        console.log(count);
        

    }, 1000 );

    return () => {
        clearInterval(interval);
        console.log('Destroyed interval');
    }

});

    const subs1 = intervalNumbers$.subscribe();
    const subs2 = intervalNumbers$.subscribe();
    const subs3 = intervalNumbers$.subscribe();

setTimeout(() => {

    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Timeout completed');
    

}, 3000)




//intervalNumbers$.subscribe( num => console.log( 'Num:', num ));