const promise_1 = new Promise((resolve, reject) => {
    reject(0 / 0);
    setTimeout(() => {
        resolve(1);        
    }, 1000);
});

const promise_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);        
    }, 1500);    
});

/*
promise_1.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
});

console.log("Hello World");
*/

Promise.all([promise_1, promise_2])
    .then((value) => {
        console.log(value);
    }, (error) => {
        console.error("Error is due to: ", error);
    });


