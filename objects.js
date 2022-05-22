// const website = {
//   name: "AlgoExpert",
//   rating: 5,
//   founders: ["Clement", "Antoine"],
//   isAwesome: true,
// };

// console.log({} === {});

// const obj = new Object();
// obj.name = "Conner";
// console.log(obj);

// Creating an object using  a function
// function Website(name, rating, founders) {
//   (this.name = name), (this.rating = rating), (this.founders = founders);
// }

// const newWeb = new Website();
// newWeb.name = "Johnson";
// newWeb.rating = 5;
// newWeb.founders = ["Clement", "Antoine"];

// console.log(newWeb);

//Creating an Object using a class
class Website {
  constructor(name, rating, founders) {
    (this.name = name), (this.rating = rating), (this.founders = founders);
  }
  sayHello() {
    return `Saying Hello`;
  }
}

const newWeb = new Website();
newWeb.name = "Johnson";
newWeb.rating = 5;
newWeb.founders = ["Clement", "Antoine"];
newWeb.sayHello();
// Method overriding in JavaScript
newWeb.sayHello = function () {
  console.log("I am subclass saying a Hi! and not Hello!");
};
newWeb.sayHello();

//console.log(newWeb);

console.log(Website.hasOwnProperty("name"));

//iterating over objects.

// This does not include every key. it excludes keys not own keys.
// Also excludes non-enumerable keys. Properties excluded form iteration
//Also excludes the symbol.

console.log(Object.keys(newWeb));
console.log(Object.values(newWeb));
console.log(Object.entries(newWeb));

Object.entries(newWeb).forEach(function (values) {
  console.log(values);
});
