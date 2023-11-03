"use strict";
let id = 5;
let company = 'Apple';
let isPublished = true;
let x = 'yo';
let age;
let ids = [1, 2, 3];
let figs = [1, 'a', {}];
x = true;
age = 30;
// Tuple
let person = [1, 'Joe', true];
// Tuple array
let employee;
employee = [
    [1, 'Joe'],
    [2, 'Ray'],
];
// Union
let pId = 22;
pId = '22'; // or 22
// Enum (named constant)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up);
