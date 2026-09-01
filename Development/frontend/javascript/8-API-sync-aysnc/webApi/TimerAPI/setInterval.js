// ======================
// JAVASCRIPT setInterval
// ======================


// 1. BASIC USAGE
setInterval(() => {
  console.log("Hello");
}, 1000);

// Output: prints "Hello" every 1 second (infinite)


// 2. STORE INTERVAL ID
const id = setInterval(() => {
  console.log("Running...");
}, 1000);


// 3. CLEAR INTERVAL (STOP)
clearInterval(id);
// Output: stops execution


// 4. COUNTER EXAMPLE
let count = 0;

const timer = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(timer);
  }
}, 1000);

// Output:
// 1
// 2
// 3
// 4
// 5


// 5. DIFFERENCE FROM setTimeout
// setTimeout → runs once
// setInterval → runs repeatedly


// 6. INTERNAL WORKING (IMPORTANT)
// setInterval → Web API → Callback Queue → Event Loop → Call Stack


// 7. COMMON ISSUE (DRIFT / OVERLAP)
setInterval(() => {
  console.log("Task");
}, 1000);

// If task takes longer than 1s → multiple calls may overlap


// 8. BETTER ALTERNATIVE (RECURSIVE setTimeout)
function repeat() {
  console.log("Safe run");
  setTimeout(repeat, 1000);
}
repeat();


// 9. STOP AFTER SOME TIME
const id2 = setInterval(() => {
  console.log("Auto stop");
}, 1000);

setTimeout(() => {
  clearInterval(id2);
}, 5000);

// Output: runs for 5 seconds then stops


// ======================
// SUMMARY
// ======================

// setInterval → repeat task
// clearInterval → stop task
// runs via Web APIs (async)
// may cause overlap issues