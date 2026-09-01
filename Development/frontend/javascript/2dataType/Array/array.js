// ======================
// JAVASCRIPT ARRAY METHODS (PAIR CHEAT SHEET)
// ======================

// 🔹 1. COPY VS REFERENCE
let temp = ['a','b']
let arrCopy = [...temp] // copy

arrCopy[1] = "shayan"

console.log(temp)     // ['a','b']
console.log(arrCopy)  // ['a','shayan']


// 🔹 2. CONST ARRAY
const arr = [1,2,3]
arr.push(10)
console.log(arr) // [1,2,3,10]


// ======================
// 🔹 3. ADD / REMOVE (PAIR)
// ======================

// push() ↔ pop()
let a = [1,2]
a.push(3)
console.log(a) // [1,2,3]

a.pop()
console.log(a) // [1,2]

// unshift() ↔ shift()
a = [2,3]
a.unshift(1)
console.log(a) // [1,2,3]

a.shift()
console.log(a) // [2,3]


// ======================
// 🔹 4. SLICE vs SPLICE
// ======================

// slice() → non-destructive
a = [1,2,3,4]
let b = a.slice(1,3)
console.log(b) // [2,3]
console.log(a) // [1,2,3,4]

// splice() → destructive(mofify array)
a = [1,2,3,4]
a.splice(1,2)//delete two form index 1
console.log(a) // [1,4]

// insert
a = [1,2,3]
a.splice(1,0,99)
console.log(a) // [1,99,2,3]


// ======================
// 🔹 5. SEARCH (PAIR)
// ======================

// includes() ↔ indexOf()
a = [1,2,3]
console.log(a.includes(2)) // true
console.log(a.indexOf(3))  // 2

// find() ↔ findIndex()
a = [10,20,30]
console.log(a.find(x => x > 15))       // 20 //find first value  of array which satisfy conditon
console.log(a.findIndex(x => x > 15))  // 1 //index of fisrt value that satisfy condition
// filter()
a = [1,2,3,4]
b = a.filter(x => x % 2 === 0)
console.log(b) // [2,4]//all value of arr that satify condition or for which callback return true


// ======================
// 🔹 6. CONDITION CHECK (PAIR)
// ======================

// some() ↔ every()
a = [1,2,3,4]

console.log(a.some(x => x > 3))   // true (any satify conditon)
console.log(a.every(x => x > 0))  // true (all satisfy condition)
console.log(a.every(x => x > 2))  // false


// ======================
// 🔹 7. ITERATION (GROUP)
// ======================

// forEach()
;[1,2,3].forEach(x => console.log(x)) // 1 2 3

// map()
a = [1,2,3]
b = a.map(x => x * 2)
console.log(b) // [2,4,6]
//for each value of array ,
//  it stored element , that we return, and stored in 
// array and return at the end

// notes-> some() every() find() findIndex() filter() map()
//  forEach() all these method can have 3 paramter in their
//  call back (element,index,arr)



// reduce()
a = [1,2,3]
let sum = a.reduce((acc, curr) => acc + curr, 0)
console.log(sum) // 6



// ======================
// 🔹 8. TRANSFORM (PAIR)
// ======================

// join() ↔ split() (string method but related)
a = ['a','b','c']
let str = a.join('-')
console.log(str) // "a-b-c"

let back = str.split('-')
console.log(back) // ['a','b','c']

// reverse() ↔ sort()
a = [1,2,3]
a.reverse()
console.log(a) // [3,2,1]

a = [3,1,2]
a.sort()
console.log(a) // [1,2,3]

// numeric sort
a = [10,2,5]
a.sort((a,b) => a - b)
console.log(a) // [2,5,10]


// ======================
// 🔹 9. COPY & MERGE (PAIR)
// ======================

// spread ↔ concat()
a = [1,2]
b = [...a]
console.log(b) // [1,2]

let c = [3,4]
console.log(a.concat(c)) // [1,2,3,4]


// ======================
// 🔹 10. CREATE / FILL (PAIR)
// ======================

// Array.from() ↔ fill()
a = Array.from("abc")
console.log(a) // ['a','b','c']

a = new Array(3).fill(0)
console.log(a) // [0,0,0]


// ======================
// 🔹 11. CHECK
// ======================

console.log(Array.isArray([1,2])) // true


// ======================
// 🔥 BONUS TRICKS
// ======================

// empty array behavior
a = []
console.log(a.some(x => x > 0))  // false
console.log(a.every(x => x > 0)) // true ❗
// Empty array = no elements to fail
// → No students → technically ✅ true (no one failed)

// sparse array
a = new Array(5)
console.log(a) // [empty × 5]

a.fill(1)
console.log(a) // [1,1,1,1,1]


//important question
let nums = [1,2,3,4,5,6]
// step-by-step chaining
let result = nums
  .filter(x => x > 2 && x % 2 === 0) // [4,6]
  .map(x => x * x)                   // [16,36]
  .reduce((acc, curr) => acc + curr, 0) // 52

console.log(result) // 52