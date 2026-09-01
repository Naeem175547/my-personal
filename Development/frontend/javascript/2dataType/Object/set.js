// ======================
// 🧠 Set in JavaScript (new Set())
// ======================

// 🔹 What is Set?
// A Set is a collection of UNIQUE values
// - No duplicates allowed
// - Maintains insertion order
// - Can store any type (number, string, object, etc.)

// ======================
// 🔹 Create Set
// ======================
let set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set);
// Output: Set(3) {1, 2, 3}


// ======================
// 🔹 Duplicate values ignored
// ======================
set.add(2);
set.add(3);

console.log(set);
// Output: Set(3) {1, 2, 3}


// ======================
// 🔹 Check value exists
// ======================
console.log(set.has(2)); // true
console.log(set.has(10)); // false


// ======================
// 🔹 Size of Set
// ======================
console.log(set.size); // 3


// ======================
// 🔹 Delete value
// ======================
set.delete(2);
console.log(set);
// Output: Set(2) {1, 3}


// ======================
// 🔹 Clear Set
// ======================
let temp = new Set([1, 2, 3]);
temp.clear();
console.log(temp); // Set(0) {}


// ======================
// 🔹 Looping Set
// ======================

// for...of
for (let value of set) {
  console.log(value);
}

// forEach
set.forEach(value => {
  console.log(value);
});


// ======================
// 🔹 Convert Array → Set (remove duplicates)
// ======================
let arr = [1, 2, 2, 3, 3, 3];

let unique = new Set(arr);

console.log(unique);
// Output: Set(3) {1, 2, 3}


// ======================
// 🔹 Convert Set → Array
// ======================
let newArr = [...unique];

console.log(newArr);
// Output: [1, 2, 3]


// ======================
// 🔹 Set with different types
// ======================
let mixSet = new Set();

mixSet.add(1);
mixSet.add("1");
mixSet.add(true);
mixSet.add({ a: 1 });

console.log(mixSet);
// Output: Set(4) {1, "1", true, {a:1}}


// ======================
// 🎯 Final One-Line
// ======================
// Set is a collection of unique values (no duplicates allowed) with insertion order preserved.
// ======================
// 🧠 Set Methods (Only Names)
// ======================

// new Set()
// add()
// has()
// delete()
// clear()
// size (property)
// forEach()

