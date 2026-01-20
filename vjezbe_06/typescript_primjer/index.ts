import { n, fun_2 } from "./some_module";


// tipizacija jednostavnih tipova
const x: number = 5;
const b: boolean = false;
const s: string = "";

// složeni tipovi
let o: object = { a: 1, x };
let o_2: { a: number, x: number } = { a: 1, x };
o = { username: "jurica" };
o_2 = { a: 5, x: 3.14 };

// tipizacija funkcije
const f: (n: number) => number  = (n: number) => n + 1;

type n_fun = (y: number) => void;
const g = (x: number, cb: n_fun) => {
    cb(x + 1);
}

g(3.14, console.log);

// polje jednostavnog tipa
const n_arr: number[] = [1, 2, 3, 4, 5];
const n_arr_2: any[] = [1, false, "Hello World"];

const n_arr_3: (number | boolean)[] = [1, false, 2, 3, 4, true];

// => onda i nešto što nije niz može imati razl. tipove
const y: number | string = "Hello World";
const z: any = 5;

interface Car {
    brand: string,
    model: string,
    n: number
};

const car: Car = { brand: "VW", model: "Golf", n: 5 };
