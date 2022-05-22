// diff between var and let
// Hoisting:

// console.log(varNum);
// console.log(letNum);

// var varNum = 0; // initialised as undefined
// let letNum = 0; // cannot be referenced until they are declared.let does not exist until declaration.

// var is function scope while let is blocked scope

function test() {
  var varNum = 0;
  let letNum = 0;

  console.log("varNum", varNum);
  console.log("letNum", letNum);
}

test();
