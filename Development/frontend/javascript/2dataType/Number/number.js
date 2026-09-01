console.log(10);       // integer
console.log(3.14);     // decimal
console.log(-5);       // negative number
console.log(Infinity);     // Infinity
console.log(-Infinity);    // -Infinity
console.log(typeof NaN);          // "number"
console.log(typeof 10);    // "number"
console.log(typeof 3.14);  // "number"
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number("123"));     // 123
console.log(parseInt("10px"));  // 10
console.log(parseFloat("3.5a")); // 3.5
console.log(isNaN("abc"));           // true
console.log(Number.isNaN(NaN));      // true
console.log(Number.isInteger(10));   // true


// 📘 Number Properties (like MAX)
console.log("Number Properties---------------")
console.log("number properties")
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(Number.MAX_VALUE);         // largest possible number
console.log(Number.MIN_VALUE);         // smallest positive number
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// 📘 Number Checking Methods
console.log("Number checking method")
console.log(Number.isNaN(NaN));        // true
console.log(Number.isInteger(10));     // true
console.log(Number.isFinite(100));     // true
console.log(Number.isFinite(Infinity));// false

// 📘 Conversion Methods (you already wrote)
console.log("conversion method and concept---------------------------")

console.log(Number("123"));     // 123
console.log(parseInt("10px"));  // 10
console.log(parseInt("10ab",2))
// parseInt(string, radix)//radix 
// 👉 Radix tells parseInt “interpret this string as a number written in that base.”
console.log(parseInt("imran"))//NaN
console.log(parseInt("23",4))//NaN
// If the first character is invalid for the given radix, parseInt returns NaN.
console.log(parseFloat("3.5s")); // 3.5
console.log(parseInt("ab"))
console.log(parseInt("1s200"))//1
console.log(parseFloat("1.2s200"))//1.2
console.log(Number("ab"))//NaN
console.log(2*"30")//60
console.log(2+"30")//"230"
console.log(2*"x")//NaN
console.log(2+(+"10"))//12
console.log(eval("1 + 2"))//3
console.log("1+2")//"1+2"
console.log(5+undefined)//NaN
console.log(5+null)//5
// | Value       | Number Conversion |
// | ----------- | ----------------- |
// | `undefined` | `NaN` ❌           |
// | `null`      | `0` ✅             |



// | Feature       | `Number()`                     | `parseInt()`                |
// | ------------- | ------------------------------ | --------------------------- |
// | Purpose       | Convert entire value to number | Extract integer from string |
// | Reads         | Whole string                   | Stops at first invalid char |
// | Decimal       | Supports                       | Removes decimal part        |
// | Invalid input | Returns `NaN`                  | May still return number     |



// 📘 Other Useful Methods
let num = 123.456;
console.log(num.toFixed(2));    // "123.46"
console.log(num.toPrecision(4));// "123.5"
//equality concept
console.log(2.00 === 2);   // true
console.log(5.000 == 5);   // true
console.log(10.0 === 10);  // true
console.log(1.1==1)//false
// 👉 JavaScript does NOT have separate int & float
// 1, 1.0, 1.00 → all same
// Type → "number"
// 👉 It converts values to a common compatible type
// 👉 Mostly → number
// console.log("" == 0);    // true
// console.log("0" == 0);   // true
// console.log([] == 0);    // true 😵







// | Operator          | Conversion Rule                                                    | Example     | Output                     |    |   |    |     |
// | ----------------- | ------------------------------------------------------------------ | ----------- | -------------------------- | -- | - | -- | --- |
// | `+`               | If any operand is string → convert to string (concatenation)       | `3 + "5"`   | `"35"`                     |    |   |    |     |
// | `-`               | Convert both to number                                             | `"10" - 2`  | `8`                        |    |   |    |     |
// | `*`               | Convert both to number                                             | `"5" * 2`   | `10`                       |    |   |    |     |
// | `/`               | Convert both to number                                             | `"10" / 2`  | `5`                        |    |   |    |     |
// | `%`               | Convert both to number                                             | `"10" % 3`  | `1`                        |    |   |    |     |
// | `==`              | Convert types before comparing                                     | `5 == "5"`  | `true`                     |    |   |    |     |
// | `===`             | No conversion (strict check)                                       | `5 === "5"` | `false`                    |    |   |    |     |
// | `!=`              | Convert types before comparing                                     | `5 != "5"`  | `false`                    |    |   |    |     |
// | `!==`             | No conversion (strict check)                                       | `5 !== "5"` | `true`                     |    |   |    |     |
// | `>` `<` `>=` `<=` | Mostly convert to number (except string vs string → lexicographic) | `"10" > 5`  | `true`                     |    |   |    |     |
// | `&&`              | Returns first falsy or last value                                  | `0 && 5`    | `0`                        |    |   |    |     |
// | `                 |                                                                    | `           | Returns first truthy value | `0 |   | 5` | `5` |
// | `!`               | Convert to boolean then reverse                                    | `!0`        | `true`                     |    |   |    |     |
// | `+x` (unary plus) | Convert to number                                                  | `+"10"`     | `10`                       |    |   |    |     |
// 👉 Number(x) and +x both convert values to numbers, but +x is shorthand


