// =======================
// 1. THEORY: Math Object → Built-in object for math operations
// =======================


// =======================
// 2. Math Constants → Predefined fixed values
// =======================

console.log(Math.PI);       // 3.141592653589793
console.log(Math.E);        // 2.718281828459045
console.log(Math.SQRT2);    // 1.4142135623730951


// =======================
// 3. Rounding Methods → Used to round numbers
// =======================

console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.trunc(4.9)); // 4


// =======================
// 4. Min / Max → Find smallest and largest value
// =======================

console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1


// =======================
// 5. Power & Square Root → Perform power calculations
// =======================

console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16));  // 4


// =======================
// 6. Absolute & Sign → Get positive value and number sign
// =======================

console.log(Math.abs(-10)); // 10
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0));  // 0
console.log(Math.sign(5));  // 1


// =======================
// 7. Random Numbers → Generate random values
// =======================

// =======================
//  THEORY: Math.random → Generates random number between 0 (inclusive) and 1 (exclusive)
// =======================

console.log(Math.random());
// e.g., 0.3745 (changes every time)


// =======================
// . Range Understanding → 0 ≤ value < 1 (0 to 0.99999)
// =======================

// Always:
// minimum → 0 (included)
// maximum → just less than 1 (never 1)


// =======================
// . Random Number (0 to 9)
// THEORY: Multiply to scale range
// =======================

let num1 = Math.floor(Math.random() * 10);
console.log(num1);
// e.g., 7 (0–9)

console.log(Math.random()*5)// (0 to 4)
console.log(Math.random()*5+1)// (1 to 5)



// =======================
// . Random Number (1 to 10)
// THEORY: Add 1 to shift range
// =======================

let num2 = Math.floor(Math.random() * 10) + 1;
console.log(num2);
// e.g., 3 (1–10)


// =======================
// . Random Number (Min to Max)
// THEORY: General formula for custom range
// =======================

let min = 5;
let max = 15;

let num3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num3);
// e.g., 9 (5–15)


// =======================
// . Random Decimal (Custom Range)
// THEORY: Without floor gives decimal values
// =======================

let num4 = Math.random() * 10;
console.log(num4);
// e.g., 6.283 (0–10 decimal)


// =======================
//  Random Float Between Min & Max
// THEORY: Scale + shift without floor
// =======================

let num5 = Math.random() * (15 - 5) + 5;
console.log(num5);
// e.g., 8.73 (5–15 decimal)


// =======================
// . Important Points
// =======================

// Math.random() → always different value
// Never returns 1
// Use Math.floor() for integers
// Use formula for custom range


// =======================
// . FINAL FORMULA
// =======================

// Integer between min and max:
// Math.floor(Math.random() * (max - min + 1)) + min


// =======================
// 8. Logarithmic Functions → Work with logarithms
// =======================

console.log(Math.log(1));     //base e// 0
console.log(Math.log10(100)); //base 10// 2


// =======================
// 9. Trigonometric Functions → Work with angles (radians)
// =======================

console.log(Math.sin(0)); // 0
console.log(Math.cos(0)); // 1
console.log(Math.tan(0)); // 0


// =======================
// 10. FINAL RULE → Math methods are static and used directly
// =======================