import { Observable, Observer } from "rxjs";

const obs_1: Observable<number> = new Observable<number>((observer: Observer<number>) => {

    let n: number = 0;

    observer.next(n++);

    setInterval(() => {
        observer.next(n++);
    }, 1000);
});

const obs_2 = new Observable((observer) => {
    observer.next(0);
    setTimeout(() => {
        observer.next(0);
        observer.complete();
    }, 1000);
});

obs_1.subscribe((n: number) => {
    console.log("Observer 1: ", n);
});

obs_2.subscribe((n) => {
    console.log("Observer 2: ", n);
}, (e) => {}, () => {
    console.log("Stream closed");
});