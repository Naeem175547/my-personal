// FETCH API (BASIC → ADVANCED)
// =============================

// 1. WHAT IS FETCH?
fetch("https://catfact.ninja/fact");

/*
OUTPUT:
👉 No direct output
👉 Returns Promise<Response>
*/


// =============================
// 2. BASIC GET REQUEST
// =============================
fetch("https://catfact.ninja/fact")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

/*
OUTPUT:
{
  fact: "Cats sleep 70% of their lives",
  length: 31
}
*/


// =============================
// 3. ASYNC / AWAIT VERSION
// =============================
async function getData() {
  try {
    let res = await fetch("https://catfact.ninja/fact");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();

/*
OUTPUT:
{
  fact: "Cats sleep 70% of their lives",
  length: 31
}
*/


// =============================
// 4. RESPONSE OBJECT
// =============================
fetch("https://catfact.ninja/fact")
  .then(res => {
    console.log(res.status);
    console.log(res.ok);
    return res.json();
  })
  .then(data => console.log(data));

/*
OUTPUT:
200
true
{ fact: "...", length: 31 }
*/


// =============================
// 5. POST REQUEST
// =============================
fetch("https://example.com/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Imran",
    age: 20
  })
})
  .then(res => res.json())
  .then(data => console.log(data));

/*
OUTPUT (depends on API):
{
  success: true,
  message: "Data received",
  id: 101
}
*/


// =============================
// 6. ERROR HANDLING
// =============================
fetch("https://api.com/wrong-url")
  .then(res => {
    if (!res.ok) {
      throw new Error("HTTP Error");
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err.message));

/*
OUTPUT:
HTTP Error
*/


// =============================
// 7. HEADERS (AUTH / API KEY)
// =============================
fetch("https://api.com/data", {
  headers: {
    "Authorization": "Bearer TOKEN",
    "Content-Type": "application/json"//when data is json type
  }
});

/*
OUTPUT:
👉 Depends on API
👉 If token valid → data returned
👉 If invalid → 401 Unauthorized
*/


// =============================
// 8. QUERY PARAMETERS
// =============================
let id = 5;

fetch(`https://api.com/user?id=${id}`);

/*
OUTPUT:
👉 User data for id = 5
Example:
{
  id: 5,
  name: "Imran"
}
*/


// =============================
// 9. ABORT FETCH
// =============================
const controller = new AbortController();

fetch("https://api.com/data", {
  signal: controller.signal
});

controller.abort();

/*
OUTPUT:
AbortError: The user aborted a request
*/


// =============================
// 10. TIMEOUT FETCH
// =============================
function fetchWithTimeout(url, time) {
  const controller = new AbortController();

  setTimeout(() => controller.abort(), time);

  return fetch(url, { signal: controller.signal });
}

/*
OUTPUT:
👉 If request takes too long:
AbortError (timeout)
*/


// =============================
// 11. CHAINING REQUESTS
// =============================
fetch("/user")
  .then(res => res.json())
  .then(user => {
    return fetch(`/posts/${user.id}`);
  })
  .then(res => res.json())
  .then(posts => console.log(posts));

/*
OUTPUT:
USER:
{ id: 1, name: "Imran" }

POSTS:
[
  { id: 101, title: "Post 1" },
  { id: 102, title: "Post 2" }
]
*/


// =============================
// 12. REUSABLE API FUNCTION
// =============================
async function apiCall(url, options = {}) {
  try {
    let res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("API Error");
    }

    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
}

/*
OUTPUT:
👉 Returns JSON data if success
👉 Else prints:
API Error
*/


// =============================
// 13. FINAL FLOW
// =============================

/*
fetch()
  ↓
Promise<Response>
  ↓
check res.ok
  ↓
convert data (.json)
  ↓
use data

OUTPUT FLOW:
👉 Raw Response → JSON → usable JS object
*/


// =============================
// FETCH RESPONSE PROPERTIES TABLE
// =============================

/*
res.status     → 200
OUTPUT: HTTP status code

res.ok         → true
OUTPUT: true if success (200–299)

res.json()     → { fact: "...", length: 31 }
OUTPUT: JS object

res.text()     → "Hello"
OUTPUT: plain text

res.headers    → Headers {}
OUTPUT: metadata

res.url        → https://catfact.ninja/fact
OUTPUT: final URL

res.statusText → OK
OUTPUT: status message

res.type       → cors
OUTPUT: response type
*/

// =============================
// FETCH RESPONSE PROPERTIES (TABLE)
// =============================

/*
┌───────────────┬──────────────────────────────────────────────┐
│ PROPERTY       │ MEANING                                      │
├───────────────┼──────────────────────────────────────────────┤
│ res.status     │ HTTP status code (200, 404, 500, etc.)       │
├───────────────┼──────────────────────────────────────────────┤
│ res.ok         │ true if status is between 200–299            │
├───────────────┼──────────────────────────────────────────────┤
│ res.json()     │ Converts response body → JavaScript object    │
├───────────────┼──────────────────────────────────────────────┤
│ res.text()     │ Converts response body → plain text           │
├───────────────┼──────────────────────────────────────────────┤
│ res.headers    │ Contains response metadata (key-value pairs)  │
├───────────────┼──────────────────────────────────────────────┤
│ res.url        │ Final URL after redirects                     │
├───────────────┼──────────────────────────────────────────────┤
│ res.statusText │ HTTP status message (OK, Not Found, etc.)     │
├───────────────┼──────────────────────────────────────────────┤
│ res.type       │ Response type (cors, basic, opaque, etc.)     │
└───────────────┴──────────────────────────────────────────────┘
*/


// # 🧠 Fetch() Error Handling (Important Notes)

// ## 1. What fetch() returns
// - `fetch()` ALWAYS returns a **Response object**
// - It does NOT return data directly
// - Even on error (like 404/500), it still returns Response

// ---

// ## 2. When fetch goes to catch block
// fetch() only goes to `catch()` when:
// - ❌ Network error (no internet)
// - ❌ Server not reachable
// - ❌ DNS / connection failure

// 👉 NOT for 404 or 500 errors

// ---

// ## 3. Case: Success (200)
// Backend:
// ```js
// res.status(200).json(data);

// Frontend:

// const res = await fetch(url);

// Result:

// res.ok = true
// res.status = 200
// data available using res.json()

// 4. Case: Not Found (404)

// Backend:
// res.status(404).json({ message: "Not found" });

// Frontend:
// const res = await fetch(url);
// Result:

// res.ok = false
// res.status = 404
// catch block NOT executed
// 5. Important Rule
// fetch() does NOT throw error for HTTP errors
// You must manually check:
// if (!res.ok) {
//     throw new Error("Request failed");

// | Status        | Meaning      | fetch behavior |
// | ------------- | ------------ | -------------- |
// | 200           | Success      | ok = true      |
// | 404           | Not found    | ok = false     |
// | 403           | Forbidden    | ok = false     |
// | 500           | Server error | ok = false     |
// | Network error | no response  | catch runs     |


// by default, Express sends status 200 automatically if you don’t set it(when we send response any type)