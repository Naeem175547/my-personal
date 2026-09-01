// 🧠 1. var (old way)
var a = 10;
var a = 20; // ✅ allowed (re-declare)
console.log(a); // 20

// ⚡ Key points:
// Function scoped
// Can re-declare ✅


// Hoisted (initialized with undefined)
// console.log(a); // undefined
// var a = 5;


// 🧠 2. let (modern)
// let b = 10;
// b = 20; // ✅ allowed (update)
// ⚡ Key points:
// Block scoped { }
// Cannot re-declare ❌
// Hoisted but in TDZ (Temporal Dead Zone)
// console.log(b); // ❌ ReferenceError
// let b = 5;

// 🔥 TEMPORAL DEAD ZONE
// =======================
// Time between hoisting and initialization
// let/const exist but cannot be accessed


// 🧠 3. const (constant)
// const c = 10;
// c = 20 ❌ error

// ⚡ Key points:
// Block scoped
// Cannot re-declare ❌
// Cannot re-assign ❌
// MUST initialize

// 👉 But for objects/arrays:
// const arr = [1,2];
// arr.push(3); // ✅ allowed (mutation)



// 🧠 4. Without keyword (⚠️ dangerous)
// d = 10;
// console.log(d);
// ⚠️ What happens:
// Becomes global variable
// Attached to window (in browser)
// Very risky ❌
// function test() {
//   x = 100; // ❌ no let/var/const
// }
// test();
// console.log(x); // 100 (leaks globally)




