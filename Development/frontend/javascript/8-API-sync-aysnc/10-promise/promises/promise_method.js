// Promise.resolve(value);
// let x=new Promise((res,rej)=>{
//     res(10);
// })
// console.log(x);
// let y=Promise.resolve(10);
// console.log(y);


// Promise.reject(value);
// let a=new Promise((res,rej)=>{
//     rej(10);
// })
// console.log(a);
// let b=Promise.reject(10);
// console.log(b);






// . Promise.all()
// Waits for all promises to resolve. asychronously ,simultaneously (in parallel).
// If any promise rejects, the entire Promise.all() rejects immediately.
// Returns an array of resolved values.


// const p1 = new Promise((resolve) => setTimeout(() => resolve("First Done"), 2000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Second Done"), 3000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("Third Done"), 1000));

// Promise.all([p1, p2, p3])
//     .then((results) => console.log("All Resolved:", results)) 
//     .catch((error) => console.error("One of them failed:", error));


// const p1 = new Promise((resolve) => setTimeout(() => resolve("First Done"), 2000));
// const p2 = new Promise((resolve,rej) => setTimeout(() => rej("Second Done"), 3000));
// const p3 = new Promise((resolve,rej) => setTimeout(() => rej("Third Done"), 1000));

// Promise.all([p1, p2, p3])
//     .then((results) => console.log("All Resolved:", results)) 
//     .catch((error) => console.error("One of them failed:", error));//value of first rejected promise



// 2. Promise.any()
// Returns the first resolved promise.
// Ignores rejections unless all promises reject.
// Returns a single resolved value.


// const p1 = new Promise((resolve, reject) => setTimeout(reject, 2000, "Error in First"));  //same=setTimeout(() => {reject("Error in First");}, 2000);
// const p2 = new Promise((resolve) => setTimeout(resolve, 3000, "Second Done"));
// const p3 = new Promise((resolve) => setTimeout(resolve, 1000, "Third Done"));

// Promise.any([p1, p2, p3])
//     .then((result) => console.log("First Resolved:", result))
//     .catch((error) => console.error("All Failed:", error));




// const p1 = new Promise((_, reject) => setTimeout(reject, 2000, "Error in First"));
// const p2 = new Promise((_, reject) => setTimeout(reject, 3000, "Error in Second"));
// const p3 = new Promise((_, reject) => setTimeout(reject, 1000, "Error in Third"));

// Promise.any([p1, p2, p3])
//     .then((result) => console.log("First Resolved:", result))
//     .catch((error) => console.error("All Failed:", error));







// Promise.race() takes an array of promises and returns a single promise that:
// Resolves or rejects as soon as the first promise in the array settles (i.e., either resolves or rejects).


// Promise.race([
//     new Promise(resolve => setTimeout(() => resolve('Promise 1'), 3000)), // Resolves in 3s
//     new Promise((_, reject) => setTimeout(() => reject('Promise 2'), 2000)), // Rejects in 2s
//     new Promise(resolve => setTimeout(() => resolve('Promise 3'), 4000)) // Resolves in 4s
//   ])
//   .then(console.log)
//   .catch(console.log);


// Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
  



//   Unlike Promise.all(), it does not stop when a promise rejects.
// It waits for all promises to complete and returns an array of objects, each having:
// status: "fulfilled" or "rejected"
// value: (if fulfilled) the resolved value
// reason: (if rejected) the error message


// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Error occurred");
// const p3 = new Promise((resolve) => setTimeout(resolve, 1000, "Done"));


