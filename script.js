'use strict';

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age} years-old, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating new variable with same name as outer scope's variable
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT';
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Ali';
// calcAge(1997);

//Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Ali';
// let job = 'student';
// const year = 1997;

// //Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   // console.log(this);
// };
// calcAge(1997);

// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(1976);

// const ali = {
//   year: 1997,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// ali.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = ali.calcAge;
// matilda.calcAge();

// const f = ali.calcAge;
// f();

// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';
// const ali = {
//   firstName: 'Ali',
//   year: 1997,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//Solution 1
// const self = this; //self ot that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
//   // console.log(this.year >= 1981 && this.year <= 1996);
// };

//Solution 2
//     const self = this; //self ot that
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// ali.greet();
// ali.calcAge();

// //Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 12, 8);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

//Primitives  vs. Objects

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Ali',
//   age: 27,
// };

// const friend = me;
// friend.age = 28;
// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitives vs Objects in Practice

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
