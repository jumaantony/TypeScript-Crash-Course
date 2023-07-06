// TypeScript Basic Types

let id: number = 5; // number type
let company: string = 'Juma Antony'; // string type
let isPublished: boolean = true; // bollean type
let x: any = 'Hello'; // any type  - can be any type

let ids: number[] = [1, 2, 3, 4, 5]; // array of numbers

// ids.push('hello'); this will throw an error

let arr: any[] = [1, true, 'hello']; // arrays of different types

// tuple
let person: [number, string, boolean] = [1, 'Juma', true]; // tuple

// tuple array
let employee: [number, string][]; // array of tuples

employee = [
    [1, 'Juma'],
    [2, 'Antony'],
    [3, 'Juma Antony'],
];

// union

let pid: string | number; // can be either string or number

pid = '22';

// enum

enum Direction1 {
    Up, // by default it is zero
    Down,
    Left,
    Right,
}

console.log(Direction1.Up); // 0

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction2.Up); // Up

// objects
type User = {
    id: number;
    name: string;
};
const user: User = {
    id: 1,
    name: 'Juma',
};

console.log(user);

// type assertion tells the compiler that we want to treat an entity as a different type
let cid: any = 1;

// let customerId = <number>cid;

let customerId = cid as number;
