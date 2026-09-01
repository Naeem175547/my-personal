// =======================
// FUNCTION TYPES IN JS

// =======================


// 🔹 1. FUNCTION DECLARATION
function name() {
  console.log("Hello");
}

// ✔ This is called Function Declaration
// ✔ It has a NAME
// ✔ It is hoisted



// 🔹 2. FUNCTION EXPRESSION
const a = function () {
  console.log("Hi");
};

// ✔ Anonymous function stored in variable
// ✔ This is anonymous Function Expression



// 🔹 3. NAMED FUNCTION EXPRESSION
const b = function test() {
  console.log("Hey");
};

// ✔ Still a Function Expression
// ✔ name 'test' is only usable inside function
// Rule:
// In function expression,
// function name is ONLY available INSIDE that function
// 🔹 Inside usage works
// const a = function test(n) {
//   if (n > 0) {
//     test(n - 1); // ✅ recursion works
//   }
// };
//text(3)//rror
a(3);

// ✔ Name test is useful for recursion / debugging
// ✔ But not available outside



// 🔹 4. ARROW FUNCTION
const c = () => {
  console.log("Arrow");
};
const c2 = (a,b) => {
  console.log("Arrow");
};
const c3 = (x) => {
  return x*x;
 
};
const c4 = (x) => (x*x);

// ✔ Also a type of Function Expression
// ❌ no own this
// ❌ no arguments object
// ❌ cannot be constructor
// ✔ shorter syntax

//5. IIFE (Immediately Invoked Function Expression)
// =======================

// 🔹 Basic Syntax
(function () {
  console.log("I run immediately");
})();

// FUNCTION TYPES (CORE)
// =======================

// 1. Function Declaration
// 2. Function Expression
//    → Anonymous
//    → Named Function Expression
//    → Arrow Function
//    ->IIFE

// | Feature         | Declaration | Expression |
// | --------------- | ----------- | ---------- |
// | Hoisting        | Full ✅      | Partial ❌  |
// | Call before def | Yes ✅       | No ❌       |
// | Syntax          | Standalone  | Assigned   |
// | Name required   | Yes         | Optional   |

// 🔥 SCOPE DIFFERENCE
if (true) {
  function test() {
    console.log("Hi");
  }}
test(); //Hi  ⚠ depends (not reliable in strict mode(ReferenceError))



if (true) {
  const test = function () {};
}
test(); // ❌ block scoped (referenceError)

// =======================
// FUNCTION DECLARATION SCOPE
//follows lexical scoping
// =======================

// 🔹 Rule:


// =======================
// . GLOBAL SCOPE

// =======================

function a() {}
console.log(a); // ✅ accessible everywhere


// Global function declaration → becomes property of global object
// BUT only in non-module browser scripts
// console.log(window.a)



// =======================
// . FUNCTION SCOPE
// =======================

function outer() {
  function b() {}
}

console.log(b); // ❌ Error

// =======================
// . BLOCK SCOPE (SPECIAL CASE) ()
//in non strict mode it behaves as fun/global scope
//but in 'strict mode' it behaves as block scope
// =======================

if (true) {
  function c() {}
}

c(); 

// Non-strict mode → ✅ works(become fun/global scope)
// Strict mode     → ❌ ReferenceError



// =======================
// 🔥 FINAL RULE
// =======================

// ✔ Outside ction sco→ global scope
// ✔ Inside function → funpe
// ⚠ Inside block {} → unpredictable (avoid)



// =======================
// 💡 BEST PRACTICE
// =======================

// ❌ avoid
if (true) {
  function test() {}
}

// ✅ use
if (true) {
  const test = function () {};
}


//another example 
 //function expression doesnot change the global scope

// function abc(){
//     console.log("function abc is running")
// }
// abc()

// let x=function abc(){
//     console.log("function expression is running")
// }
// abc()
// x()