// let num = 10;

// console.log(num);

// num = 20;

// // converting a number string to a Number.

// let newnum = "10px";
// console.log(Number(newnum));
// //parseInt behind the scene parses the input from left to right and return only the valid numbers.
// console.log(parseInt(newnum));

// //exponent in javascript
// let numb = 10.5;
// console.log(Math.pow(numb, 3));

//STRINGS
let str = "abcd";

//console.log(str + "efg");
//console.log(str.substring(1, 3));

//Objects
const person = {
  name: "Johnson",
  age: 39,
  course: "FrontendExpert",
};

//console.log(person);

// This converts the person object to a string
const personString = JSON.stringify(person);
// This converts the person string back to an object.
const personObject = JSON.parse(personString);
//console.log(personString, personObject);

// Difference between Map and Object is that a Map key can be any data structure
//and the Map prototype has built in method that can be used.
const map = new Map();
map.set("name", "Johnson");
//console.log(map);

const set = new Set();
set.add("hello");
set.add("world");
set.add("hello"); // cannot have duplicate elements.
console.log(set);

// we do not always have to use set and map in JavaScript. we most of the time use arrays and objects.
