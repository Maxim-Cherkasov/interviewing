// Async/await

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

async function f() {
   let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
});

   let result = await promise; // wait until the promise resolves (*)

   alert(result); // "done!
}

f();