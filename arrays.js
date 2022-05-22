const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// const newArray = new Array(5);
// console.log(newArray);
// newArray.fill(2);
// console.log(newArray);
// newArray.push(4);
// console.log(newArray);

//ForEach

// const arr = [1, 2, 3];
// arr.forEach((value, index) => console.log(value, index, this), { num: 10 });
// arr.forEach(
//   function (value, index) {
//     console.log(value, index, this);
//   },
//   { num: 10 }
// );

//Map
// Difference between Map and foreach is the map will create a new array based on the return values.
// const mapValue = arr.map(function (value, index) {
//   return value + index;
// });

// console.log(mapValue);

//filter
// const arrayFilter = arr.filter((value, index) => {
//   return value > 1;
// });
// console.log(arrayFilter);

//find: instead of returning the new array, it returns the first value that matches the condition.

// const arrayFilter = arr.find((value, index) => {
//   return value > 1;
// });
// console.log(arrayFilter);

//Every
// const arrayFilter = arr.every((value, index) => {
//   return value > 1;
// });
// console.log(arrayFilter);

//Some
// const arrayFilter = arr.some((value, index) => {
//   return value > 1;
// });
// console.log(arrayFilter);

//reduce

// The accumulator is the returned value of the previous iteration.
// current value is the value in the array
// if the first value is not included, then the first value of the array is used.
const sum = arr.reduce(function (accumulator, currValue) {
  return accumulator + currValue;
}, 0);

console.log(sum);
