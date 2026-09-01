// 🧠 Array.from() 
// 👉 Array.from() creates a new array from an array-like or iterable object

// 🔹 String → Array
console.log(Array.from("hello")); 
// Output: ["h", "e", "l", "l", "o"]


// 🔹 Set → Array
let s = new Set([1, 2, 3]);
console.log(Array.from(s)); 
// Output: [1, 2, 3]


// 🔹 Array-like Object → Array
let obj = {0: "a", 1: "b", length: 2};//this obj is array-like (key, 0 ,1 and length)
console.log(Array.from(obj)); 
// Output: ["a", "b"]
//how this internally work
// 🔍 How Array.from() works internally (array-like object)
// let obj = {0: "a", 1: "b", length: 2};
// let arr = [];
// for (let i = 0; i < obj.length; i++) {
//   arr[i] = obj[i];
// }
// console.log(arr); // ["a", "b"]


// 🔹 With Mapping Function
// | Feature  | Mapping Function | Comparator   |
// | -------- | ---------------- | ------------ |
// | Works on | One element      | Two elements |
// | Purpose  | Transform        | Compare      |
// | Example  | `x => x*2`       | `(a,b)=>a-b` |
//so it is like map() fun.
//mapping fun ->// Array.from(arrayLike, callback(val,index)) works like map while creating the array
console.log(Array.from([1, 2, 3], x => x * 2)); 
// Output: [2, 4, 6]


// 🔹 Create Array with Length
console.log(Array.from({ length: 5 })); 
// Output: [undefined, undefined, undefined, undefined, undefined]


// 🔹 Generate Numbers (0 to 4)
console.log(Array.from({ length: 5 }, (_, i) => i)); 
// Output: [0, 1, 2, 3, 4]