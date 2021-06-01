'use strict';

const myName = "Jonas";

if (myName === 'Jonas') {
    const job = 'teacher';
    console.log(`Jone is a ${job}`);
    const age = 2037 - 1989;
    console.log(age);
    // console.log(x);
}

// console.log(me);
// console.log(job);
// console.log(year);

var me = "jonas";
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

const numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}