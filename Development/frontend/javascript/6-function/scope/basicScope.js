// =======================
// 1. GLOBAL SCOPE
// =======================
// Declared outside all functions

let a = 10;

function test() {
  console.log(a); // ✅ accessible
}

test();
console.log(a); // ✅ accessible

// ✔ accessible everywhere
// ❌ may cause conflicts



// =======================
// 2. LOCAL (FUNCTION) SCOPE
// =======================
// Declared inside function

function demo() {
  let b = 20;
  console.log(b); // ✅
}

demo();
console.log(b); // ❌ Error

// ✔ only inside function
// ✔ safe & isolated



// =======================
// 3. BLOCK SCOPE
// =======================
// let & const follow block {}

if (true) {
  let x = 5;
  const y = 10;
}

console.log(x); // ❌
console.log(y); // ❌

// var is NOT block scoped
if (true) {
  var z = 100;
}

console.log(z); // ✅



// =======================
// 4. LEXICAL SCOPE
// =======================
// Inner function can access outer variables

function outer() {
  let name = "Naeem";

  function inner() {
    console.log(name); // ✅
  }

  inner();
}

outer();

// ✔ depends on where function is written
// ✔ not where it is called
// =======================
// LEXICAL SCOPING RULES (SIMPLE)
// =======================

//:Rule 1:
// If a variable is declared above a function definition,
// then the function can use it

let a = 10;

function test() {
  console.log(a); // ✅
}



// Rule 2:
// A function can use variables of its parent function

function outer() {
  let b = 20;

  function inner() {
    console.log(b); // ✅
  }

  inner();
}



// Rule 3:
// A function CANNOT use variables of child function

function outer2() {

  function inner2() {
    let c = 30;
  }

  console.log(c); // ❌
}

function outer2() {

  function inner2() {
    var c = 30;
  }

  console.log(c); // ❌
}
//same:
// var belongs to the NEAREST FUNCTION scope
// (NOT block, NOT parent automatically)


// Rule 4:
// JavaScript looks for variables from inside → outside

let x = 1;

function A() {
  let y = 2;

  function B() {
    let z = 3;
    console.log(x, y, z); // ✅
  }

  B();
}



// Rule 5:
// Nearest variable is used (shadowing)

let val = 10;

function demo() {
  let val = 50;
  console.log(val); // 50
}



// =======================
// 🔥 FINAL LINE
// =======================
// Function uses variables where it is CREATED,
// not where it is CALLED






// =======================
// 🔥 QUICK SUMMARY
// =======================
// Global  → everywhere
// Local   → inside function
// Block   → inside {}
// Lexical → access parent scope


//Lexcal Scoping(scoping rule)
// 🔹 Definition:
// Scope is decided by WHERE code is WRITTEN,
// not where it is called
// TYPES DECIDED BY LEXICAL SCOPING
// =======================
// ✔ Global Scope  → outside everything
// ✔ Function Scope → inside function
// ✔ Block Scope   → inside {} (let/const)

// =======================
// 🔹 RULES
// =======================
// 1. Inner function can access outer variables
// 2. Outer function CANNOT access inner variables
// 3. JS looks variables: Local → Parent → Global