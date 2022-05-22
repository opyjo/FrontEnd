// Array destructuring
// each position represent the index.
// const arr = [1, 2, 3, 4];

// const [first, second, ...rest] = arr;
// console.log(first, second);
// console.log(rest);

//Object destructuring
// const person = {
//   name: "Connor",
//   website: "FrontendExpert",
// };

// const { name: firstname } = person;

// console.log(firstname);

//Spread Operator
// const arr = [1, 2, 3, 4];
// function add(x, y) {
//   console.log(x + y);
// }

// add(...arr);

// const arr1 = [5, 6, 7];
// const newarr = [0, ...arr, 4.5, ...arr1];
// console.log(newarr);

//null Coalesing. Used to check if an element is null or not.

const myName = "Connor";

//const defaultName = myName != null ? myName : "Default Name";
// can be written as

// const defaultName = myName ?? "Default Name";

// console.log("Hello " + myName);

//optional Chaining
// one of the ideas of the option chaining is catching an error

// const person = {
//   company: {
//     website: "AlgoExpert",
//   },
// };

// console.log(person?.company?.website ?? "Foo");

//Short Circuit Evaluation
//Normal way of writing the code
const shouldRunCode = true;

function logWorld() {
  console.log("Hello World");
}

// if (shouldRunCode) {
//   logWorld();
// }

// syntactic Sugar: not advisable because it makes the code difficult to read.
shouldRunCode && logWorld();
