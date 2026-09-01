// =======================
// HOISTING (DEFINITION)
// =======================
// Hoisting = JS moves declarations to the top of thier current scope
// BEFORE code execution
// Only DECLARATIONS are hoisted, not initializations

// =======================
// 1. VAR HOISTING
// =======================
console.log(a); // undefined
var a = 10;

// Internally JS sees:
var a;
console.log(a); // undefined
a = 10;

// ✔ declaration hoisted
// ✔ initialized with undefined

// =======================
// 2. LET & CONST HOISTING
// =======================
console.log(b); // ❌ ReferenceError
let b = 20;

// Internally:
let b; // hoisted
// but NOT initialized
// 🔥 TDZ (Temporal Dead Zone)
// time between hoisting and initialization
// but remember
// let y;
// console.log(y); // ✅ undefined
// ✔ Works because it's after declaration

// =======================
// 3. FUNCTION DECLARATION
// =======================

test(); // ✅ works

function test() {
  console.log("Hello");
}

// ✔ fully hoisted (name + body)


// =======================
// 4. FUNCTION EXPRESSION
// =======================

test(); // ❌ Error

var test = function () {
  console.log("Hi");
};

// Internally:
var test;
test(); // ❌ test is undefined
test = function() {}

// =======================
// 5. ARROW FUNCTION
// =======================

test(); // ❌ Error

const test = () => {
  console.log("Arrow");
};

// ✔ behaves like let/const
// ❌ not usable before declaration

// =======================
// 6. CLASS HOISTING
// =======================

const obj = new A(); // ❌ Error

class A {}

// ✔ hoisted
// ❌ NOT initialized (like let/const)

// =======================
// 🔥 EXECUTION PHASES
// =======================

// 1. Memory Creation Phase
//    → variables & functions stored
//    → var = undefined
//    → let/const = uninitialized
//    → function declaration = full definition

// 2. Execution Phase
//    → code runs line by line

// =======================
// ⚡ SUMMARY TABLE
// =======================

// var      → hoisted + initialized with undefined
// let      → hoisted + TDZ (not initialized)
// const    → hoisted + TDZ (not initialized, must assign value)
// function declaration → fully hoisted (name + body)
// function expression  → variable is hoisted
//                         (var → undefined, let/const → TDZ)
//                         ❌ function not usable before initialization
// class    → hoisted + TDZ (like let/const)
// =======================
// 💡 TRICKY EXAMPLE
// =======================

var x = 1;

function demo() {
  console.log(x); // undefined
  var x = 2;
}

demo();
// because:
 // var x inside function shadows global x

 // =======================
// 🔥 FINAL RULE (CORRECT)
// =======================

// Hoisting = declarations move to the top of
// their CURRENT SCOPE (global or function)

// BUT initialization stays in place