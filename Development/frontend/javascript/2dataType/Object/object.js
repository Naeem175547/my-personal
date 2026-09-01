// =======================
// 1. What is an Object?
// =======================
let student = {
  name: "Naeem",
  age: 20,
  marks: 85
};

// =======================
// 2. Creating Objects
// =======================

// (a) Object Literal
let obj1 = {
  key: "value"
};

// (b) Using new Object()
let obj2 = new Object();
obj2.name = "Naeem";

// =======================
// 3. Accessing Values
// =======================

// Dot notation
console.log(student.name);      // Naeem

// Bracket notation
console.log(student["name"]);    // Name
// 👉 Missing property = undefined in both dot and bracket notation

// Dynamic key
let key = "marks";
console.log(student[key]);      // 85

// =======================
// 4. Add / Update / Delete
// =======================

student.city = "Delhi";   
student.age = 21;         
delete student.marks;     

console.log(student);
// { name: "Naeem", age: 21, city: "Delhi" }

// =======================
// 5. Nested Objects
// =======================

let user = {
  name: "Naeem",
  address: {
    city: "Muzaffarnagar",
    pin: 251001
  }
};

console.log(user.address.city); // Muzaffarnagar

// =======================
// 6. Objects with Methods
// =======================

let person = {
  name: "Naeem",
  greet: function () {
    console.log("Hello");
  }
};

person.greet(); // Hello

// Short syntax
let person2 = {
  greet() {
    console.log("Hello");
  }
};

person2.greet(); // Hello

let name = "Naeem";
let person3 = {
  name,
  greet() {
    console.log("Hello " + this.name);
  }
};

obj.greet(); // Hello Naeem
// =======================
// 7. this Keyword
// =======================

let user2 = {
  name: "Naeem",
  sayName() {
    console.log(this.name);
  }
};

user2.sayName(); // Naeem

// =======================
// 8. Looping Objects
// =======================

for (let key in student) {
  console.log(key, student[key]);
}
/*
name Naeem
age 21
city Delhi
*/

// =======================
// 9. Object Methods
// =======================

console.log(Object.keys(student));    
// ["name", "age", "city"]

console.log(Object.values(student));  
// ["Naeem", 21, "Delhi"]

console.log(Object.entries(student)); 
// [["name","Naeem"],["age",21],["city","Delhi"]]
console.log(student.hasOwnProperty("name"));//true


// =======================
// 10. Copy / Merge Objects
// =======================

let a = { x: 1 };
let b = { y: 2 };

let c = { ...a, ...b };
console.log(c); // { x: 1, y: 2 }

// =======================
// 11. Destructuring
// =======================

let student2 = { name: "Naeem", age: 20 };

let { name, age } = student2;
console.log(name, age); // Naeem 20

// =======================
// 12. Optional Chaining
// =======================

console.log(user?.address?.city); // Muzaffarnagar

// =======================
// 13. Object vs Array
// =======================

let objExample = { a: 1, b: 2 };
let arrExample = [1, 2, 3];

console.log(objExample); // { a: 1, b: 2 }
console.log(arrExample); // [1, 2, 3]

// =======================
// 14. Reference Type
// =======================

let objA = { x: 1 };
let objB = objA;

objB.x = 10;
console.log(objA.x); // 10

// =======================
// 15. Check Property Exists
// =======================

console.log("name" in student); // true
console.log(student.name!=undefined)//true
console.log(student.hasOwnProperty("name"))//true

// =======================
// 16. JSON
// =======================

let json = '{"name":"Naeem","age":20}';
// 👉 "JSON is a string format used to represent objects for data transfer."
let parsed = JSON.parse(json);
console.log(parsed); 
// { name: "Naeem", age: 20 }

let stringified = JSON.stringify(parsed);
console.log(stringified); 
// '{"name":"Naeem","age":20}'
// note->
console.log(({"name":"Naeem","age":20}));//{ name: 'Naeem', age: 20 }
//so when we write key in obj js automatically convert in into string.either we write like "key" or key

// =======================
// 17. Object with Special Keys
// =======================

let obj = {
  1: "one",
  2: "two",
  null: "null value",
  true: "true value",
  undefined: "undefined value"
};

console.log(obj);
/*
{
  "1": "one",
  "2": "two",
  "null": "null value",
  "true": "true value",
  "undefined": "undefined value"
}
  {
  1: "one",
  2: "two",
  null: "null value",
  true: "true value",
  undefined: "undefined value"
}
  note->👉 “Object keys are always strings internally, but console may hide quotes for readability.”
*/


// =======================
// . Accessing Values(b)
// =======================
//braket notation

console.log(obj[1]);        // one
console.log(obj["1"]);      // one

console.log(obj[null]);     // null value
console.log(obj["null"]);   // null value

console.log(obj[true]);     // true value
console.log(obj["true"]);   // true value

console.log(obj[undefined]);   // undefined value
console.log(obj["undefined"]); // undefined value

// 2. Dot Notation (Important)// =======================// 
// ❌ These will NOT work
// console.log(obj.1);        // SyntaxError
// console.log(obj.null);     // SyntaxError (null is keyword)
// console.log(obj.true);     // SyntaxError (true is keyword)
// console.log(obj.undefined); // works but risky
// 🔥 Simple Understanding
// ✅ obj["1"] → always safe
// ❌ obj.1 → invalid
// ⚠️ obj.undefined → works but not recommended
// 🔥 One-Line
// 👉 Use bracket notation for special keys (number, null, true, undefined)

// =======================
//18 . Key Conversion Rule
// =======================

// All keys become strings internally

console.log(typeof Object.keys(obj)[0]); // string


// =======================
// 19. Interview Trap (Duplicate Keys)
// =======================

let obj2 = {
  true: "yes",
  "true": "no"
};

console.log(obj2.true); // no

// Explanation:
// true → "true"
// "true" → "true"
// So last value overwrites


// =======================
// 20. Using Map (Real Key Types)
// =======================

let map = new Map();

map.set(true, "yes");
map.set(null, "null value");
map.set(1, "one");

console.log(map.get(true)); // yes
console.log(map.get(null)); // null value
console.log(map.get(1));    // one


// =======================
// . Object vs Map Key Difference
// =======================

// Object
let obj3 = {};
obj3[true] = "yes";
obj3["true"] = "no";

console.log(obj3); 
// { "true": "no" }

// Map
let map2 = new Map();
map2.set(true, "yes");
map2.set("true", "no");

console.log(map2.get(true));   // yes
console.log(map2.get("true")); // no


// =======================
// 21. Auto Conversion of Keys to String
//n JavaScript objects, keys are automatically converted to strings (except Symbol)
// =======================

let obj = {
  1: "one",
  true: "yes",
  null: "null value"
};

console.log(obj);
/*
{ 1: 'one', true: 'yes', null: 'null value' }
(Note: console may show without quotes)
*/


// =======================
// 2. Internal Reality (Keys are Strings)
// =======================

console.log(Object.keys(obj));
// ["1", "true", "null"]

// . Exception (Symbol Key)
// =======================

let sym = Symbol("id");

let obj3 = {
  [sym]: 123
};

console.log(obj3[sym]); // 123
console.log(Object.keys(obj3)); 
// []  (Symbol keys are not included)

// . Get Symbol Keys
// =======================

let symbols = Object.getOwnPropertySymbols(obj3);

console.log(symbols);
// [ Symbol(id) ]


// =======================
// . Final Rule
// =======================
// Object keys → always string
// Except → Symbol (unique, not converted)
//so when we write key in obj js automatically convert in into string.either we write like "key" or key
