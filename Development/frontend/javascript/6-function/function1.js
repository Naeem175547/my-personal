// =======================
// 1. FUNCTION DECLARATION
// =======================
// Reusable block of code

function greet() {
  console.log("Hello");
}

greet(); 
// Hello



// =======================
// 2. FUNCTION WITH PARAMETERS
// =======================
// Parameters = input values

// =======================
// . NORMAL PARAMETERS
// =======================

function add(a, b) {
  console.log(a + b);
}

add(2, 3);
// 5



// =======================
// . DEFAULT PARAMETERS
// =======================
// If no value is passed, default is used

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
// Hello Guest

greet("Naeem");
// Hello Naeem



// =======================
// . REST PARAMETERS (...)
// =======================
// Collects multiple values into array


function sum(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  console.log(total);
}

sum(1, 2, 3, 4);
// 10

// =======================
// USING arguments OBJECT
// =======================

function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  console.log(total);
}

sum(1, 2, 3, 4);
// 10

// arguments:
// ✔ available in normal functions
// ✔ array-like (not real array)
// ❌ not available in arrow functions

// rest (...numbers):
// ✔ real array
// ✔ works in arrow functions
// ✔ modern & recommended



// =======================
// . SPREAD OPERATOR (...)
// =======================
// Expands array into individual values

let arr = [1, 2, 3];

function show(a, b, c) {
  console.log(a, b, c);
}

show(...arr);
// 1 2 3



// =======================
// . SEQUENCING / ORDER OF PARAMETERS
// =======================
// Order matters: positional mapping

function demo(a, b, c) {
  console.log(a, b, c);
}

demo(10, 20, 30);
// 10 20 30

demo(30, 10, 20);
// order changes output



// =======================
// IMPORTANT RULES
// =======================
// 1. Normal parameters → fixed input
// 2. Default → fallback value
// 3. Rest (...) → many values → array
// 4. Spread (...) → array → individual values
// 5. Order matters in function calling


// =======================
// 3. FUNCTION WITH RETURN
// =======================
// return gives output back

function mul(a, b) {
  return a * b;
}

console.log(mul(2, 4));
// 



// =======================
// 4. FUNCTION EXPRESSION
// =======================
// Function stored in a variable

let fun = function () {
  console.log("Hi");
};

fun();
// Hi



// =======================
// . ARROW FUNCTION
// =======================
// Short syntax of function

let sum = (a, b) => a + b;

console.log(sum(3, 7));
// 10










// =======================
// . IIFE (Immediately Invoked Function Expression)
// =======================
// Runs immediately after creation

(function () {
  console.log("Run instantly");
})();
// Run instantly



// =======================
// . IMPORTANT POINTS
// =======================
// Function = reusable block of code
// Parameters = input values
// return = gives output back from function



// =======================
// 5.HIGHER ORDER FUNCTION (HOF)
// =======================
// A function that:
// 1. Takes another function as argument OR
// 2. Returns a function

// =======================
// . FUNCTION AS ARGUMENT
// =======================

function greet(name) {
  return "Hello " + name;
}

function processUser(callback) {
  console.log(callback("Naeem"));
}

processUser(greet);
// Hello Naeem



// =======================
// . FUNCTION RETURNS FUNCTION
// =======================

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

let double = multiplier(2);
console.log(double(5));
// 10



// ======================
// . BUILT-IN HIGHER ORDER FUNCTIONS
// =======================


// map() -> transform each element
let arr1 = [1, 2, 3];

let mapResult = arr1.map(num => num * 2);
console.log(mapResult);
// [2, 4, 6]



// filter() -> select elements based on condition
let arr2 = [1, 2, 3, 4];

let filterResult = arr2.filter(num => num % 2 === 0);
console.log(filterResult);
// [2, 4]



// reduce() -> reduce array to single value
let arr3 = [1, 2, 3, 4];

let sum = arr3.reduce((acc, num) => acc + num, 0);
console.log(sum);
// 10



// =======================
// IMPORTANT POINTS
// =======================
// ✔ HOF = takes function OR returns function
// ✔ Used in map, filter, reduce
// ✔ Used in callbacks & async programming
// ✔ Makes code reusable and clean
//callback= fun pass as a parameter