// const person = {
//   isHuman: true,
// };

//Using object.create
// const child = Object.create(person);

// console.log(person);
// console.log(child.isHuman);

//Using object.assign
// const child = Object.assign(Object.create(person), {
//   maxAge:18
// });

//function constructor
function person(name) {
  this.name = name;
}

console.log(person.prototype);

const connor = new person("connor");
console.log(connor);
