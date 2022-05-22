const BASE_API = "http://localhost:8080/api";
const JSON_API = "http://localhost:8080/jsonapi";
const POST_API = "http://localhost:8080/postapi";
const SLOW_API = "http://localhost:8080/slowapi";
const FAKE_API = "https://jsonplaceholder.typicode.com/posts";

fetch(FAKE_API)
  .then((data) => console.log(data))
  .catch((err) => console.log("Could not fetch data"));

// setting parameters
