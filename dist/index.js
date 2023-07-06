"use strict";
// TypeScript Basic Types
let id = 5; // number type
let company = 'Juma Antony'; // string type
let isPublished = true; // bollean type
let x = 'Hello'; // any type  - can be any type
let ids = [1, 2, 3, 4, 5]; // array of numbers
// ids.push('hello'); this will throw an error
let arr = [1, true, 'hello']; // arrays of different types
// tuple
let person = [1, 'Juma', true]; // tuple
// tuple array
let employee; // array of tuples
employee = [
    [1, 'Juma'],
    [2, 'Antony'],
    [3, 'Juma Antony'],
];
// union
let pid; // can be either string or number
pid = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // Up
const user = {
    id: 1,
    name: 'Juma',
};
console.log(user);
// type assertion tells the compiler that we want to treat an entity as a different type
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
