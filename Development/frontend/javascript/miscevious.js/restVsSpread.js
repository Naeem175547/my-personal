// =======================
// 🔥 SPREAD vs REST (ADVANCED)
// =======================


// =======================
// 🔹 1. REST OPERATOR (...)
// =======================
// 👉 Collects multiple values into ONE array

function sum(...numbers) {
  console.log(numbers)
}

sum(1, 2, 3) // [1,2,3]


// 🔥 REST vs arguments

function demo() {
  console.log(arguments) // array-like
}

demo(1,2,3)


// ❌ arguments problems
function bad() {
  // arguments.map(x => x) ❌ error (no map)
  console.log(typeof arguments) // "object"
}


// ✅ REST is better
function good(...args) {
  console.log(args.map(x => x * 2)) // works
}
good(1,2,3) // [2,4,6]


// 🔥 Differences
// arguments:
// - array-like (not real array)
// - no map/filter/reduce
// - no arrow function support
// const test = () => {
//   console.log(arguments) ❌ ERROR
// }

// test(1,2,3)
// - has extra properties (callee 👉 callee = reference to the current function)(deprecated not allowed in strict mode)

// rest:
// - real array
// - supports all array methods
// - clean syntax
// - works in arrow functions


// =======================
// 🔹 2. SPREAD OPERATOR (...)
// =======================
// 👉 Expands values of arr/string/obj(by seprating by ,)

let arr = [1,2,3]

console.log(...arr) // 1 2 3

console.log(Math.max(...arr)) // 3
// console.log(Math.max(arr)) // NaN


// 🔹 String spread
let str = "imran"

console.log(...str) // i m r a n


// 🔹 Merge arrays
let combine = [...arr, ...str]
console.log(combine)
// [1,2,3,'i','m','r','a','n']


// 🔹 Copy array
let copy = [...arr]
console.log(copy)


// 🔹 Object spread
let data = {
  email: "test@gmail.com",
  password: "123"
}

let newData = { ...data, id: 1 }
console.log(newData)


// 🔥 Array → Object
console.log({ ...arr })
// {0:1, 1:2, 2:3}//key=index,value=value


// 🔥 String → Object
console.log({ ..."abc" })
// {0:'a', 1:'b', 2:'c'}


// =======================
// 🔹 3. DESTRUCTURING + REST
// =======================

let names = ["imran","naeem","shayan","rahul"]
//winnder=names[0]
//runerUp=name[1]
//0r

let [winner, runnerUp, ...others] = names

console.log(winner)   // imran
console.log(runnerUp) // naeem
console.log(others)   // ['shayan','rahul']

console.log("object destructuring")
// 🔹 Object destructuring
let obj = {
  name: "karan",
  age: 14,
  class: 9,
  username: "karan@123"
}

let {
  username,
  age: ummer,
  city = "Mumbai",
  ...restObj
} = obj

console.log(username) // karan@123
console.log(age)//error(age is not defined)
console.log(ummer)    // 14

console.log(city)     // Mumbai
console.log(restObj)  // remaining properties //{ name: 'karan', class: 9 }//here all propertices are like obj form not array
console.log(restObj.name)


// =======================
// 🔥 ADVANCED USE CASES
// =======================

// 🔹 Function call with spread
function add(a,b,c) {
  return a+b+c
}

console.log(add(...[1,2,3])) // 6


// 🔹 Immutable update (React style)
let users = ["A","B"]
let updated = [...users, "C"]

console.log(updated) // ["A","B","C"]


// 🔹 Remove item using spread + slice
let nums = [1,2,3,4]

let removed = [
  ...nums.slice(0,1),
  ...nums.slice(2)
]

console.log(removed) // [1,3,4]


// =======================
// 🔥 MAIN DIFFERENCE
// =======================

// REST (...)
// 👉 collects values into array
// 👉 used in function params / destructuring

// SPREAD (...)
// 👉 expands values
// 👉 used in function calls / arrays / objects


// =======================
// 🔥 INTERVIEW ONE-LINER
// =======================

// =======================
// 🔥 INTERVIEW ONE-LINER
// =======================

// REST (...)  → // REST (...) → collects remaining values
// → into an ARRAY (in function params / array destructuring)
// → into an OBJECT (in object destructuring)
// SPREAD (...) → expands (unpacks) values into individual elements
// DESTRUCTURING → extracts values from array/object into variables