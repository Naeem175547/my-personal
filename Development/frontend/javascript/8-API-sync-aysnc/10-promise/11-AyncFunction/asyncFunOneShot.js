// ======================================================
// ASYNC FUNCTION & AWAIT IN JAVASCRIPT
// BASIC TO ADVANCED NOTES
// ======================================================// ======================================================
// 1. SYNCHRONOUS CODE
// ======================================================
console.log("1");
console.log("2");
console.log("3");
// Output:
// 1
// 2
// 3

// ======================================================
// 2. ASYNCHRONOUS CODE
// ======================================================
console.log("Start");
setTimeout(() => {
    console.log("Data Loaded");
}, 2000);
console.log("End");
// Output:
// Start
// End
// Data Loaded

// ======================================================
// 3. CALLBACK FUNCTION
// ======================================================
function getData(callback) {
        setTimeout(() => {
        console.log("Data received");
        callback();
    }, 2000);
}
getData(() => {
    console.log("Done")
});

// Output after 2 sec:
// Data received
// Done

// ======================================================
// 4. PROMISE STATES
// ======================================================
/*
Promise States:
1. Pending
2. Resolved / Fulfilled
3. Rejected
*/

// ======================================================
// 5. CREATING PROMISE
// ======================================================
let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Work completed");
    }
    else {
        reject("Work failed");
    }
});
// ======================================================
// 6. USING PROMISE
// ======================================================
promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// Output:
// Work completed

// ======================================================
// 7. WHY ASYNC / AWAIT
// ======================================================
/*
Problems with callbacks:
- Callback hell
- Hard to read

Problems with many .then():
- Complex chaining
Solution:
- async / await
*/

// ======================================================
// 8. ASYNC FUNCTION
// ======================================================
async function myFunc() {

}

// ======================================================
// 9. ASYNC ALWAYS RETURNS PROMISE
// ======================================================

async function hello() {
    return "Hello";
}

console.log(hello());
// Output:
// Promise { 'Hello' }
// Equivalent:

function hello2() {
    return Promise.resolve("Hello");

}

// ======================================================
// 10. RETURN VALUE FROM ASYNC
// ======================================================
async function data() {
    return 100;
}

data().then((res) => {

    console.log(res);

});
// Output:
// 100

// ======================================================
// 11. THROW ERROR IN ASYNC
// ======================================================
async function test() {
    throw "Error found";
}
test()
.catch((err) => {
    console.log(err);
});
// Output:
// Error found

// Equivalent:

function test2() {

    return Promise.reject("Error found");

}

// ======================================================
// 12. AWAIT KEYWORD
// ======================================================
/*

await waits for Promise result.(control come outside the async fun and after executing the syncronous  code of await line and after completing tasks below async fun it again enter asyscn fun start from next line)
await pauses ONLY the async function
JavaScript does NOT block the whole program
Control goes back to:
- remaining synchronous code
- Call Stack
- Event Loop
Other synchronous code continues running.
When awaited Promise settles ,
the remaining async function code
is placed into the Microtask Queue.

Then async function resumes
from the NEXT line after await
Syntax:
let result = await promise;
 await can only be used inside(mostly):
1. async functions
2. top-level ES modules.(Top-level await works in Node.js ONLY in ES Modules)
(top-level ES modules->outside all functions/classes/blocks)


Inside async function:
- code before await runs synchronously
- await pauses async function
- code after await runs later asynchronously
*/

// ======================================================
// 13. BASIC AWAIT EXAMPLE
// ======================================================
function getData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}
async function showData() {
    console.log("Loading...");
    let result = await getData2();
    console.log(result);
    console.log("Finished");
}
showData();
// Output after 2 sec:
// Loading...
// Data fetched
// Finished
// ======================================================
// 14. WITHOUT AWAIT
// ======================================================
function getData3() {
    return new Promise((resolve) => {
        resolve("Success");
    });
}
async function test3() {
    let result = getData3();
    console.log(result);
}
test3();
// Output:
// Promise { 'Success' }

// ======================================================
// 15. AWAIT PAUSES FUNCTION
// ======================================================
async function demo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
demo();
console.log("C");
// Output:
// A
// C
// B

// ======================================================
// 16. MULTIPLE AWAIT
// ======================================================
function task(msg, time) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}
async function run() {
    let r1 = await task("First", 1000);
    console.log(r1);
    let r2 = await task("Second", 1000);
    console.log(r2);
    let r3 = await task("Third", 1000);
    console.log(r3);
}
run();
// Output:
// First
// Second
// Third

// ======================================================
// 17. TRY CATCH WITH AWAIT
// ======================================================
function apiCall() {
    return new Promise((resolve, reject) => {
        let success = false;
        if(success) {
            resolve("Success");
        }
        else {
            reject("API Failed");
        }
    });
}
async function getData4() {
    try {
        let result = await apiCall();
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}
getData4();
// Output:
// API Failed

// ======================================================
// 18. ASYNC ARROW FUNCTION
// ======================================================
const helloArrow = async () => {
    return "Hello";
};
helloArrow().then(console.log);
// Output:
// Hello

// ======================================================
// 19. FETCH API WITH ASYNC AWAIT
// ======================================================
async function getUsers() {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    let data = await response.json();
    console.log(data);
}
getUsers();
// ======================================================
// 20. IMPORTANT FLOW
// ======================================================
/*
async function
      |
      |-- always returns Promise
      |
      |-- return value
      |        |
      |        --->then reteurn-> Promise.resolve(value)
      |
      |-- throw error
               |
               ---> then return-> Promise.reject(error)

*/

// ======================================================
// 21. AWAIT FLOW
// ======================================================
/*
await promise
      |
      |-- if resolved
      |       |
      |       ---> returns resolved value
      |
      |-- if rejected
              |
              ---> throws error
*/
// ======================================================
// 22. SEQUENTIAL EXECUTION
// ======================================================
async function sequential() {
    let a = await task("Task 1", 1000);
    let b = await task("Task 2", 1000);
    console.log(a);
    console.log(b);
}

// ======================================================
// 23. PARALLEL EXECUTION
// ======================================================

async function parallel() {
    let p1 = task("Task 1", 1000);
    let p2 = task("Task 2", 1000);
    let a = await p1;
    let b = await p2;
    console.log(a);
    console.log(b);

}
// ======================================================
// 24. PROMISE.ALL()
// ======================================================
async function allExample() {
    let results = await Promise.all([
        Promise.resolve(10),
        Promise.resolve(20),
        Promise.resolve(30)

    ]);
    console.log(results);
}
allExample();
// Output:
// [10, 20, 30]
// ======================================================
// 25. PROMISE.RACE()
// ======================================================
Promise.race([
    new Promise(res =>
        setTimeout(() => res("A"), 1000)
    ),

    new Promise(res =>
        setTimeout(() => res("B"), 500)
    )

])
.then(console.log);
// Output:
// B

// ======================================================
// 26. TOP LEVEL AWAIT
// ======================================================

/*

Works inside ES Modules
<script type="module">
let response = await fetch(url);
</script>
*/

// ======================================================
// 27. REAL LIFE ANALOGY
// ======================================================
/*

Promise = Food Order Token

Pending  -> Food cooking
Resolved -> Food ready
Rejected -> Food unavailable

await = Wait until food arrives
async = Restaurant system handling orders
*/

// ======================================================
// 28. COMMON MISTAKES
// ======================================================
// ------------------------------------------------------
// 1. USING AWAIT OUTSIDE ASYNC
// ------------------------------------------------------

// Wrong
// await fetch(url);

// Correct

async function correctExample() {

    await fetch(url);

}

// ------------------------------------------------------
// 2. FORGETTING AWAIT
// If await is forgotten:

// - async function still works normally
// - Promise object is returned/stored instead of resolved value

// If async function returns nothing:
// - it returns Promise.resolve(undefined)
// ------------------------------------------------------

async function mistake2() {
    let data = fetch("https://jsonplaceholder.typicode.com/users");
    console.log(data);

}
mistake2();
// Output:
// Promise { <pending> }

// ------------------------------------------------------
// 3. MISSING TRY CATCH
// ------------------------------------------------------
// Wrong
async function wrongErrorHandling() {
    let data = await apiCall();
}
// Correct
async function correctErrorHandling() {
    try {
        let data = await apiCall();
    }
    catch(err) {
        console.log(err);
    }
}
// ======================================================
// 29. INTERVIEW IMPORTANT POINTS
// ======================================================
/*

async:
- Makes function return Promise
- Return value becomes resolved Promise
- Throw error becomes rejected Promise(handle using try-catch or catch(as do for then()))

await:
- Waits for Promise to be resolved and return resovled value
- Pauses async function only

Advantages:
- Cleaner code
- Easy error handling
- Better readability

*/

// ======================================================
// 30. FULL REAL EXAMPLE
// ======================================================
function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Logged In");
        }, 1000);
    });
}

function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Profile Data");
        }, 1000);
    });
}
async function start() {
    try {
        console.log("Starting");
        let user = await loginUser();
        console.log(user);
        let profile = await getProfile();
        console.log(profile);
        console.log("Completed");
    }
    catch(err) {
        console.log(err);
    }
}
start();

// Output:
// Starting
// User Logged In
// Profile Data
// Completed

// ======================================================
// 31. SHORT REVISION NOTES
// ======================================================

/*
async
|
|-- always returns Promise
|
|-- return value -> resolved Promise
|
|-- throw error -> rejected Promise


await
|
|-- waits for Promise
|
|-- returns resolved value
|
|-- rejected promise -> throws error


try-catch
|
|-- handles async errors

*/
