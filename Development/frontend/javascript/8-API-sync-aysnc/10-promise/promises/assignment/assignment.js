 // Question 1

// let promise = Promise.resolve(3);
// promise.then(value => console.log(value));

 // Question 2

// let promise = new Promise((resolve, reject) => {
//   resolve("Success!");
// });
 // promise.then(value => console.log(value));
// promise.then(console.log)


// Question 3

// let promise = Promise.resolve(3);
// console.log(promise)
// promise.then(value => console.log(value));
// console.log("imran")

//  question 4
// let promise = Promise.resolve(1);
// promise.then(value => value + 2).then(value => console.log(value));

// Question 5
// Promise.resolve("Resolved").then(console.log);
// Promise.reject("Rejected").catch(console.log);

 // Question 6

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Resolved!"), 1000);
// });
// promise.then(value => console.log(value));
// console.log("After promise");

// Question 7

// Promise.resolve(2)
//   .then(value => value * 2)
//   .then(value => Promise.resolve(value * 2))//.then() automatically waits for that Promise and unwraps it. so only promise with value*2 is returned
//   .then(value => console.log(value));

// Question 8

// Promise.reject('Initial Error')
//   .catch(err => { throw new Error('New Error'); })
//   .catch(err => console.log(err.message));
// Question 10

// let promise = Promise.resolve(Promise.resolve('Resolve'));
// promise.then(res => console.log(res));
// // Promise.resolve() automatically unwraps Promises.



// // Question 12

let promise = new Promise((resolve, reject) => {
  throw new Error('Error thrown');
});
promise.catch(error => console.log(error.message));


function add(a,b){
    let x=10;
    y=20;
    
    
    console.log(a,b);

    a=x;
    b=y;
    console.log(a,b);
   
    

}
add(1,2);