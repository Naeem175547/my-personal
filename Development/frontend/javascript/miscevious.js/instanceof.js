// instanceof
// → checks type of object in JavaScript

// 🌟 instanceof IN JAVASCRIPT (SIMPLE EXAMPLES)


// 🌟 1. Array Example

let arr = [1, 2, 3];

console.log(arr instanceof Array);

// 📌 Output:
// true

// 🌟 2. Object Example

let obj = { name: "Naeem" };

console.log(obj instanceof Object);

// 📌 Output:
// true


// 🌟 3. Class Example

class User {}

let u = new User();

console.log(u instanceof User);

// 📌 Output:
// true


// 🌟 4. Function Example

function test(){}

console.log(test instanceof Function);

// 📌 Output:
// true

// 🌟 5. String Example

let str = "hello";

console.log(str instanceof String);

// 📌 Output:
// false ❌

// 👉 Because primitive string is NOT object


// 🌟 6. Real String Object

let str2 = new String("hello");

console.log(str2 instanceof String);

// 📌 Output:
// true

// ━━━━━━━━━━━━━━━━━━
// 🎯 FINAL IDEA

// instanceof checks:
// ✔ Array
// ✔ Object
// ✔ Class instance
// ✔ Function

// BUT NOT primitives:
// ❌ string
// ❌ number
// ❌ boolean