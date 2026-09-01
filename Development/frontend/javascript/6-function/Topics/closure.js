// A closure is when a function remembers variables from 
// its outer scope even after that outer function has finished executing.
function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }

  const closureExample = outerFunction();
  closureExample(); // Outputs: I am from the outer function
  //notes->JavaScript does NOT delete variables if:A function still has a reference to them.
//   So internally:
// outer execution context → created  x = 10
//   inner function created (and carries reference to x)
// outer finishes → execution context removed
// BUT
// inner STILL references x → so JS keeps x alive in memory
// That “kept alive memory scope” is called:
// 🔥 Lexical Environment + Closure Reference (FINAL NOTES)



// 🧠 What is Lexical Environment?

// A Lexical Environment is an internal JavaScript structure created whenever a function or block runs.
// It represents the scope of that code.

// It stores:
// 👉 Variables (variable bindings: name → value)
// 👉 Functions (function bindings: name → function object)
// 👉 A reference to its outer lexical environment (scope chain)


// 📦 Simple meaning:
// Lexical Environment = Scope + Variables + Outer scope reference

// 🧠 Function Binding
// Function binding means storing a function’s name mapped to its actual function object inside the Lexical Environment.


// 🧠 Function Object (Important)
// A JavaScript function is internally an object.
// It contains:
// 👉 executable code
// 👉 properties (name, length, etc.)
// 👉 hidden reference to outer scope ([[Environment]] for closure)
// 🔥 Key Concept (Closure base)
// A Lexical Environment is stored in heap memory,
// and it is kept alive if a function is still referencing it.
// 👉 This is what enables CLOSURE.
// 🧠 Closure Rule
// A child function has its own Lexical Environment,
// and it also contains a reference to its outer Lexical Environment.
// 👉 Variables are NOT copied.
// 👉 They are accessed through the scope chain.

// 📦 Final Simple Definition:
// Lexical Environment = A structure that defines scope, stores variables & functions, and links to outer scope.
// Closure = When a function remembers its outer Lexical Environment even after the outer function has finished execution.





// Classic Interview Trap
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const a = outer();
a(); // 1
a(); // 2
a(); // 3

// Why does count not reset?
// Because:
// count is NOT recreated each time
// it is stored in closure memory
// So:
// 👉 closure keeps state alive

// . Multiple closures = separate memory
const a = outer();
const b = outer()
a(); // 1
a(); // 2
b(); // 1

// Each call to outer() creates a new closure environment
// So:
// a has its own count
// b has its own count


// 1. Closure + Loop trap (VERY important)
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output:
// 4
// 4
// 4
// Why?
// Because:
// var i is function scoped (not block scoped)
// all closures share SAME i
// loop finishes → i becomes 4
// then callbacks run
 


for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output:
// 1
// 2
// 3
// Why?

// Because:

// var i is block scoped 
// all closures share their own  i
// loop finishes → i becomes 4
// 👉 Closures don’t copy variables
// 👉 They keep reference to the same variable in memory



// 📌 . Real Use Cases
// ✅ 1. Data Privacy (Encapsulation)
function bank() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}

// 👉 balance is private via closure

// ✅ 2. Function Factory
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
double(5); // 10
// ✅ 3. Memoization
function memoize() {
  let cache = {};

  return function (n) {
    if (cache[n]) return cache[n];

    cache[n] = n * n;
    return cache[n];
  };
}