// ======================
// JAVASCRIPT EXCEPTION HANDLING
// ======================


// 1. BASIC try...catch
try {
  let x = 10;
  console.log(x);
} catch (err) {
  console.log("Error:", err.message);
}
// Output: 10


// 2. THROW CUSTOM ERROR
function checkAge(age) {
  if (age < 18) {
    throw new Error("Not allowed");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (err) {
  console.log(err.message);
}
// Output: Not allowed


// 3. FINALLY BLOCK (always runs)
try {
  console.log("Try block");
} catch (err) {
  console.log("Catch block");
} finally {
  console.log("Finally always runs");
}
// Output:
// Try block
// Finally always runs


// 4. DIFFERENT ERROR TYPES
try {
  undefinedFunction();
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
// Output:
// ReferenceError
// undefinedFunction is not defined


// 5. CUSTOM THROW (without Error object)
function test(num) {
  if (num < 0) {
    throw "Negative value not allowed";
  }
}

try {
  test(-1);
} catch (err) {
  console.log(err);
}
// Output: Negative value not allowed


// 6. NESTED try...catch
try {
  try {
    throw new Error("Inner error");
  } catch (err) {
    console.log("Inner:", err.message);
    throw err;
  }
} catch (err) {
  console.log("Outer:", err.message);
}
// Output:
// Inner: Inner error
// Outer: Inner error


// 7. ASYNC ERROR (IMPORTANT)
async function fetchData() {
  try {
    let res = await Promise.reject("API Failed");
  } catch (err) {
    console.log("Caught:", err);
  }
}
fetchData();
// Output: Caught: API Failed


// 8. PROMISE ERROR HANDLING
Promise.reject("Error in Promise")
  .then(res => console.log(res))
  .catch(err => console.log("Caught:", err));
// Output: Caught: Error in Promise


// 9. OPTIONAL: ERROR OBJECT PROPERTIES
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
// Output:
// Error
// Something went wrong
// (stack trace - environment dependent)


// ======================
// SUMMARY
// ======================

// try → risky code
// catch → handle error
// finally → always runs
// throw → create error
// async → use try/catch or .catch()