/***********************************************************************
                    JAVASCRIPT PROMISES (BASIC → ADVANCED)
************************************************************************

A Promise is an object that represents:
- Future success
- Future failure
- Asynchronous operation result

Promise States:
1. Pending
2. Fulfilled
3. Rejected

Promise Lifecycle:
1. Pending
2. Fulfilled / Rejected
3. Settled

Promises solve:
- Callback hell
- Deep nesting
- Difficult async flow handling

Common Uses:
- API Calls
- Database Queries
- File Reading
- Timers
- Async Operations

************************************************************************/



/***********************************************************************
1. CREATING A BASIC PROMISE
************************************************************************/

const basicPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Task completed successfully");
    }
    else {
        reject("Task failed");
    }
});

basicPromise
.then((result) => {
    console.log("SUCCESS:", result);
})
.catch((error) => {
    console.log("ERROR:", error);
})
.finally(() => {

    console.log("Promise finished");

});
/*
OUTPUT:
SUCCESS: Task completed successfully
Promise finished
*/

/***********************************************************************
PROMISE INTERNAL CONCEPT
************************************************************************

state -> Promise state

value -> Promise value
         (resolved value or rejection reason)

onFulfilled: [f1, f2]
-> Functions from then()

onRejected: [f1, f2]
-> Functions from catch()

Promise callbacks (inside then or catch) go to:
MICROTASK QUEUE
************************************************************************/

/***********************************************************************
2. PROMISE WITH setTimeout
************************************************************************/

const timerPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data received after 2 seconds");
    }, 2000);
});
timerPromise.then((data) => {
      console.log(data);
});

/*
OUTPUT AFTER 2 SEC:
Data received after 2 seconds
*/

/***********************************************************************
3. PROMISE CHAINING
************************************************************************
Each .then() returns a NEW Promise
************************************************************************/

Promise.resolve(2)
.then((num) => {
    console.log("Step 1:", num);
    return num * 2;
})

.then((num) => {
    console.log("Step 2:", num);
    return num * 3;
})

.then((result) => {
    console.log("Final Result:", result);
});

/*
OUTPUT:
Step 1: 2
Step 2: 4
Final Result: 12
*/

//If a .then() callback does NOT return anything, JavaScript automatically returns:
// Promise.resolve(undefined)



/***********************************************************************
4. ERROR HANDLING
************************************************************************
Any error moves directly to catch()
************************************************************************/

Promise.resolve("Start")
.then((data) => {
    console.log(data);
    throw new Error("Something went wrong");
})
.then(() => {
    console.log("This will not execute");
})
.catch((err) => {
    console.log("Caught Error:", err.message);
});


/*
OUTPUT:
Start
Caught Error: Something went wrong
*/



/***********************************************************************
5. Promise.resolve()
************************************************************************
Creates instantly resolved promise
************************************************************************/

Promise.resolve("Instant Succes")
.then((data) => {
    console.log(data);
});

/*
OUTPUT:
Instant Success
*/

/***********************************************************************
6. Promise.reject()
************************************************************************
Creates instantly rejected promise
************************************************************************/
Promise.reject("Instant Failure")
.catch((err) => {
    console.log(err);
});
/*
OUTPUT:
Instant Failure
*/
/***********************************************************************
7. Promise.all()
************************************************************************
Runs all promises in parallel
- Success only if ALL succeed
- Fails immediately if one fails
************************************************************************/

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);
Promise.all([p1, p2, p3])
.then((results) => {
    console.log("Promise.all:", results);

})
.catch((err) => {
    console.log(err);
});
/*
OUTPUT:
Promise.all: [10, 20, 30]
*/

/***********************************************************************
8. Promise.allSettled()
************************************************************************
Waits for all promises
Returns success + failure both
************************************************************************/

const settled1 = Promise.resolve("Success");
const settled2 = Promise.reject("Failed");

Promise.allSettled([settled1, settled2])
.then((results) => {
    console.log("Promise.allSettled:", results);

});

/*
OUTPUT:
Promise.allSettled: [
  { status: 'fulfilled', value: 'Success' },
  { status: 'rejected', reason: 'Failed' }
]
*/


/***********************************************************************
9. Promise.race()
************************************************************************
Returns whichever promise finishes first
************************************************************************/
const race1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Fast");
    }, 1000);
});
const race2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Slow");
    }, 3000);
});
Promise.race([race1, race2])
.then((result) => {
    console.log("Race Winner:", result);
});


/*
OUTPUT AFTER 1 SEC:
Race Winner: Fast
*/



/***********************************************************************
10. Promise.any()
************************************************************************
Returns first successful promise
************************************************************************/

const any1 = Promise.reject("Failed 1");
const any2 = Promise.resolve("Success");
const any3 = Promise.reject("Failed 2");

Promise.any([any1, any2, any3])

.then((result) => {

    console.log("Promise.any:", result);

})

.catch((err) => {

    console.log(err);

});
/*
OUTPUT:
Promise.any: Success
*/

/***********************************************************************
11. ASYNC FUNCTION
************************************************************************
async automatically returns Promise
************************************************************************/

async function asyncFunction() {
    return "Async Function Result";
}
asyncFunction()
.then((data) => {
    console.log(data);
});


/*
OUTPUT:
Async Function Result
*/



/***********************************************************************
12. await KEYWORD
************************************************************************
await pauses(return back from then async) async function until promise resolves(or line await line completes fully)
************************************************************************/
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("John Doe");
        }, 2000);
    });
}
async function getUser() {
    console.log("Fetching user...");
    const user = await fetchUser();
    console.log("User:", user);

}
getUser();
/*
OUTPUT:
Fetching user...

AFTER 2 SEC:
User: John Doe
*/

/***********************************************************************
13. async/await ERROR HANDLING
************************************************************************/

async function errorExample() {
    try {
        const result = await Promise.reject("Async Error");
        console.log(result);
    }
    catch(err) {
        console.log("Caught:", err);
    }
}
errorExample();

/*
OUTPUT:
Caught: Async Error
*/

/***********************************************************************
14. EVENT LOOP + MICROTASK QUEUE
************************************************************************
Promise callbacks execute before setTimeout callbacks
************************************************************************/

console.log("Start");
setTimeout(() => {

    console.log("setTimeout");

}, 0);
Promise.resolve()
.then(() => {
    console.log("Promise Microtask");
});
console.log("End");
/*
OUTPUT:
Start
End
Promise Microtask
setTimeout
*/

/***********************************************************************
15. SEQUENTIAL EXECUTION
************************************************************************
Tasks execute one after another
************************************************************************/

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 Done");
            resolve();
        }, 1000);
    });
}
function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 Done");
            resolve();
        }, 1000);
    });
  }
async function sequentialExecution() {
    await task1();
    await task2();
    console.log("Sequential Completed");
}
sequentialExecution();
/*
OUTPUT:
AFTER 1 SEC:
Task 1 Done

AFTER 2 SEC:
Task 2 Done
Sequential Completed
*/

/***********************************************************************
16. PARALLEL EXECUTION
************************************************************************
Tasks execute together using Promise.all()
************************************************************************/

async function parallelExecution() {
    await Promise.all([
        task1(),
        task2()

    ]);
    console.log("Parallel Completed");
}
parallelExecution();
/*
OUTPUT AFTER 1 SEC:
Task 1 Done
Task 2 Done
Parallel Completed
*/

/***********************************************************************
17. CUSTOM DELAY FUNCTION
************************************************************************
Useful sleep utility
************************************************************************/
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function delayExample() {
    console.log("Waiting...");
    await delay(3000);
    console.log("3 Seconds Completed");
}
delayExample();

/*
OUTPUT:
Waiting...

AFTER 3 SEC:
3 Seconds Completed
*/

/***********************************************************************
18. PROMISE FLATTENING
************************************************************************
Returning Promise inside then automatically flattens
************************************************************************/
Promise.resolve()
.then(() => {
    return Promise.resolve(100);

})
.then((data) => {
    console.log("Flattened Result:", data);
});
/*
OUTPUT:
Flattened Result: 100
*/

/***********************************************************************
19. CALLBACK TO PROMISE CONVERSION
************************************************************************/
//old way
function oldCallbackFunction(callback) {
    setTimeout(() => {
        callback("Old Callback Data");
    }, 1000);
}

/*
PROMISIFIED VERSION
*/
function newPromiseFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise Data");
        }, 1000);
    });
}
newPromiseFunction()
.then((data) => {
    console.log(data);
});
/*
OUTPUT AFTER 1 SEC:
Promise Data
*/

/***********************************************************************
20. RETRY MECHANISM
************************************************************************
Retry Promise multiple times if failed
************************************************************************/

function fakeApi() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.7;
        if(success) {
            resolve("API Success");
        }
        else {
            reject("API Failed");
        }
    });

}
async function retry(fn, retries) {
    for(let i = 1; i <= retries; i++) {
        try {
            const result = await fn();
            console.log("Success on attempt:", i);
            return result;
        }
        catch(err) {
            console.log("Retry:", i);
            if(i === retries) {
                throw err;
            }
        }
    }
}
retry(fakeApi, 5)
.then(console.log)
.catch(console.error);


/*
POSSIBLE OUTPUT:

Retry: 1
Retry: 2
Success on attempt: 3
API Success
*/

/***********************************************************************
21. IMPORTANT INTERVIEW QUESTIONS
************************************************************************
Q1. Difference between callback and promise?
Callback:
- Function passed into another function
Promise:
- Object representing future result

Q2. Difference between Promise and async-await?
- async/await is syntactic sugar over promises


Q3. Difference between Promise.all and Promise.allSettled?
Promise.all:
- Fails immediately if one fails

Promise.allSettled:
- Waits for all promises

Q4. Why promises are better?
- Cleaner code
- Better error handling
- Easier chaining
- Better readability

/***********************************************************************
22. BEST PRACTICES
************************************************************************
1. Always use catch()
2. Use try/catch with async-await
3. Use Promise.all for parallel operations
4. Avoid deeply nested then()
5. Return promises properly
6. Handle errors gracefully
7. Avoid unnecessary async-await
/***********************************************************************
23. MINI PRACTICE TASKS
************************************************************************

1. Create promise that resolves after 5 sec
2. Create login simulation using promise
3. Fetch API data using fetch()
4. Use Promise.all with multiple APIs
5. Create retry mechanism
6. Build sleep() utility
7. Convert callback code into promise
8. Create countdown timer with promises
************************************************************************/
/***********************************************************************
24. COMPLETE FLOW
************************************************************************
Callbacks
   ↓
Promise Basics
   ↓
then / catch / finally
   ↓
Promise Chaining
   ↓
Promise Methods
   ↓
Async/Await
   ↓
Error Handling
   ↓
Event Loop
   ↓
Advanced Promise Patterns
************************************************************************/