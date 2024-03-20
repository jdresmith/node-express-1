### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Using a callback to pass a function as an argument to another function to allow it to execite when the asynchronus operation completes. Using async functions and await operators to return a promise and await the keyword to pause the execution of the function until it is solved or rejected.

- What is a Promise?
A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation, allowing you to handle asynchronous code in a more organized and manageable way

- What are the differences between an async function and a regular function?
Regualr functions immediately return after the code executes, return a value, while the asynchhronus code returns a value which the promise will resolve or reject.

- What is the difference between Node.js and Express.js?
Node.js is designed to simplify the process of building web applications or APIs on the server side while Express.js is a framework that runs in addition to Node.js to ease the use of HTTP requests and provide additional features and abstarctions.

- What is the error-first callback pattern?
These are used in Node.js for handling asynchronus operations allowing an argument with an error object to be returned describing the error.

- What is middleware?
Middlewaree is the copmponent of software thats sits between the request and response cycle of an application, assisting the execution of functions or modying the requests and responses.

- What does the `next` function do?
The `next` function is a callback function used to pass control to the next middleware function in the stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
Using `await` for each request will cause a delay in retrieving the data one after the other. The function `getUsers` could be more specific as it is retrieving user data rather listing every single git Hub user. The `fetch` API could be used in place of the `$` to not rely on jQuery.
