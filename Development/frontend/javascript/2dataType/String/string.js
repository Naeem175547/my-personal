// 🔹 Strings
let a = "Hello";
let b = 'World';
let c = `Hi`;   // template literal

console.log(typeof "Hello"); // "string"

// 🔹 Variables and Printing
let name = "Naeem";

console.log(name);//Naeem
console.log("Hello"+name)//HelloNaeem
console.log("Hello", name);//Hello Naeem
console.log(`Hello ${name}`);//Hello Naeem





// 🔹 Quotes Handling
console.log('imran "young"');
console.log("imran 'young'");

// ❌ Errors (invalid syntax)
// console.log("imran "khan"");
// console.log("im "d");

// 🔹 Type Coercion
console.log("5" + 2); // "52"

// 🔹 String Properties
console.log(name.length);      // property
// console.log(typeof name.length); // number

console.log(name[0]); // allowed in JS & Python, not in C/Java

// 🔹 eval() usage
// It takes a string and runs it as real JavaScript code and return ans also.
const result = eval("5 + 4");
console.log(result); // 9
// 🔹 Variables with eval
let x = 10;
let y = 20;
console.log(x, y);
eval(`x = ${y}`); // x = 20
console.log(x, y);
// 🔹 eval with type coercion
console.log(eval("'3' + 2")); // "32"


//other useful method
//-> .toString(radix) is used to convert a number into a string in a given base (2–36)
let x1=10

console.log(x1.toString())//"10"
console.log(x1.toString(2))//"1010"

// console.log(10.toString())//error
console.log((10).toString())//"10"

// 🧠 Does JS first convert primitive to object?
let x = 10;
console.log(x.toString()); // "10"

// 🔥 Yes — JavaScript uses "autoboxing"
// Behind the scenes:
// new Number(10).toString();
// 👉 Temporary object is created → method called → object destroyed

// ⚠️ Important:
// Conversion happens AFTER syntax is valid
// ❌ This fails (syntax error BEFORE conversion)
// console.log(10.toString()); error
// It’s a syntax error because JavaScript interprets the dot after 10 as a decimal point, not as a method call, making the expression invalid.
//that'why cossole.log(10..toString())//first for decimal point another for method call

// ✅ These work (syntax is clear, then autoboxing happens)
console.log((10).toString());
console.log(10..toString());//(not prefered)
// 🎯 Final:
// JS first parses syntax → then applies autoboxing (primitive → object)


//->parseInt(string,radix)->it extract Integer from the string .
// 👉 Radix tells parseInt “interpret this string as a number written in that base.”
console.log(parseInt("10px"));  // 10
console.log(parseInt("10ab",2))
// parseInt(string, radix)//radix 

console.log(parseInt("imran"))//NaN
console.log(parseInt("23",4))//NaN
// If the first character is invalid for the given radix, parseInt returns NaN.
// console.log(parseInt("10px"));  // 10
console.log(parseInt("10ab",2))




//both pareInt() and .toString()
let num = 10;
// number → string (binary)
let str = num.toString(2);   // "1010"

// string → number (binary)
let back = parseInt(str, 2); // 10

console.log(str);  // "1010"
console.log(back); // 10