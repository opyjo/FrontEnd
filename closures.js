// A closure gives you access to an outer function's scope from an inner function.

// const globalNum = 5;

// function logNum() {
//   const localNum = 1;
//   console.log(globalNum + localNum);
// }

// logNum();

function example() {
  const num = 5;
  function logNum(num) {
    console.log(num);
  }

  logNum(10);
}

example();
