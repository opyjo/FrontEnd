// Regular functions return one single value or nothing
// Generators can return(yield) multiple values, one after another, on-demand.
// They work great with iterables allowing to create data streams with ease.

function* genNumbers() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const generator = genNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
