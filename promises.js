// A promise is an object and contains the value for an asynchrous operation
// the value could be pending, fulfilled or rejected.
//A promise has two argument: resolve and reject functions

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log(promise);
