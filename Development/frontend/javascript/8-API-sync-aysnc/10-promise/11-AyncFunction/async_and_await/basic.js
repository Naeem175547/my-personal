//it return a promise
// async function text(){
    


// }
// console.log(text());//Promise { undefined }

// async function text(){
//     return "imrna";


// }
// console.log(text());//



// let text=async ()=> "imrna";
// console.log(text());


// async function greet() {
//     return "Hello!";
//   }
  
//   greet().then(console.log); // Output: Hello!




// The await keyword pauses the execution of an async function until the Promise is resolved
// async function greet() {
//     let promise = new Promise((resolve) => {
//       setTimeout(() => resolve("Hello!"), 2000);
//     });
  
//     let result =  await promise; // Waits for the promise to resolve
//     console.log(result); // Output after 2 seconds: Hello!
//   }
  
//   console.log(greet())//promise{<pending>}
// console.log("imran khan")  




// async function example() {
//     console.log("Start");
  
//     await console.log("Inside await");//it synchornous so there is code will run sychronoulsy
  
//     console.log("After await");
  
//     console.log("End");
//   }
  
//   console.log("Main Thread Task Before async function");
//   example();
//   console.log("Main Thread Task After async function");
  
  



// async function fetchMultipleData() {
//     let user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
//     let post = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
  
//     console.log(user.name);
//     console.log(post.title);
//   }
  
//   fetchMultipleData();
  


// async function fetchParallel() {
//     let [user, post] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
//       fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json())
//     ]);
   
//     console.log(user.name, post.title);
//   }
  
//   fetchParallel();


// async function fetchData() {
//     try {
//       let res = await fetch("invalid_url"); // This will fail
//       let data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log("Error:",error.message);
//     } finally {
//       console.log("Operation completed.");
//     }
//   }
  
//   fetchData();
//   console.log("imra mkjan")
  
  




// async function task1() {
//     return new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 3000));
//   }
  
//   async function task2() {
//     return new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 2000));
//   }
  
//   async function runTasks() {
//     let [res1, res2] = await Promise.all([task1(), task2()]); //task1() and task2() start executing simultaneously (in parallel).
//     console.log(res1, res2);
//   }
  
//   runTasks();
  




// Promise.resolve(value) returns a Promise, not the value itself. However, when we use await, it unwraps the Promise and gives us the resolved value.
//that's why use try catch for handling error(rejected promise)



// let a = await 10;
// console.log(a);
// same

// let a = await Promise.resolve(10);
// console.log(a); // 10


// async function test() {
//     let a = await new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Resolved!"), 2000);
//     });
  
//     console.log(a); // Prints "Resolved!" after 2 seconds
//   }
  
//   test();
  


// async function test() {
//     try {
//       let a = await new Promise((resolve, reject) => {
//         setTimeout(() => reject("Rejected!"), 2000);
//       });
  
//       console.log(a); // ❌ This line will not execute
//     } catch (error) {
//       console.log("Caught Error:", error); // ✅ Handles the rejection
//     }
//   }
  
//   test();
  