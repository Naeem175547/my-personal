// =======================
// TYPES OF INFINITE LOOPS
// =======================


// 🔹 1. while loop (condition always true)
while (true) {
  console.log("infinite");
}


// 🔹 2. for loop (no exit condition)
for (;;) {
  console.log("infinite");
}


// 🔹 3. do...while loop
do {
  console.log("infinite");
} while (true);


// 🔹 4. Missing update condition
let i = 0;
while (i < 5) {
  console.log(i);
  // i++ missing → infinite loop
}


// 🔹 5. Wrong condition (never becomes false)
let j = 0;
while (j >= 0) {
  console.log(j);
  j++; // always >= 0 → infinite
}


// 🔹 6. Floating condition mistake
let x = 0.1;
while (x != 1) {
  console.log(x);
  x += 0.1; // may never become exactly 1
}


// 🔹 7. Recursion (infinite function calls)
function test() {
  test(); // no base case
}

test();


// 🔹 8. Event loop / async infinite trigger
setInterval(() => {
  console.log("runs forever");
}, 1000);


// =======================
// 🔥 SUMMARY
// =======================
// 1. Condition always true
// 2. No increment/decrement
// 3. Wrong condition logic
// 4. Missing base case (recursion)
// 5. Continuous async execution