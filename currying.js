// function sum(a, b, c) {
//   return a + b + c;
// }

// The above function can ve rewritten as
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedSum(1)(4)(10));
