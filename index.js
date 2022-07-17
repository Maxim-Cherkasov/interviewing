// CLOSURES

/*
      A closure is a function that remembers its outer variables
      and can access them. 

      All functions are naturally closures (there is only one 
      exception, to be covered in The "new Function" syntax).

      They automatically remember where they were created using
      a hidden [[Environment]] property, and then their code
      can access outer variables.
*/

// PROMISES

/*
      A promise is a special JavaScript object that links the “producing code"
      and the “consuming code”


*/


// Async/await

/*
      It is a special syntax to work with promises in a more comfortable fashion
*/

// This function return a resolved promise
// with the result of 1

/*
async function f() {
   return 1;
}

f().then(alert);
*/

// or

/*
async function f() {
   return Promise.resolve(1);
 }
 
 f().then(alert); // 1
 */

// asinc ensures that the function returns a promise

// Await 
// it works only inside acync functions

// let value = await promise;

/*
async function f() {
   let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
});

   let result = await promise; // wait until the promise resolves (*)

   alert(result); // "done!
}

f();
*/

// Type conversion

// There are arithmetic, comparison, assignment, logical and 
// ternary operators in JavaScript
// ---------------------------------

// Data types

/*
There are eight data types in JavaScript. 
Seven of them are called “primitive”, because their values contain
only a single thing (be it a string or a number or whatever).

Числа, большие числа, строки, булин - логический тип, null, undefined, 
обьекты - единственный не примитивный тип данных, symbol - используется,
чтобы созать уникальный идентификатор для оъектов 
*/

// Задание - никакого результата

/*
let f = function(x) {
   alert(x)
}

(function() {
   f(1)
}())
*/


// Что выведет код и почему?

// setTimeout, syntax
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

/*
console.log(1);

setTimeout ( () => {
   console.log(2);
})

new Promise (resolve => {
   resolve(console.log(3))
})
*/

// js info examples

/*
function sayHi(phrase, who) {
   alert( phrase + ', ' + who );
 }
 
 setTimeout(sayHi, 1000, "Hello", "John"); 
 */

 // If the first argument is a string, then
 //  JavaScript creates a function from it.

 //setTimeout("alert('Hello')", 1000);

 // But using strings is not recommended,
 // use arrow functions instead of them, like this:

 //setTimeout(() => alert('Hello'), 1000);

 // Map and Set

