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
const arr = [1, 2, 3, 4];
function add(x, y) {
  console.log(x + y);
}

add(...arr);

const arr1 = [5, 6, 7];
const newarr = [0, ...arr, 4.5, ...arr1];
console.log(newarr);

//null Coalesing. Used to check if an element is null or not.

const myName = "Connor";

const defaultName = myName != null ? myName : "Default Name";

console.log("Hello " + myName);
