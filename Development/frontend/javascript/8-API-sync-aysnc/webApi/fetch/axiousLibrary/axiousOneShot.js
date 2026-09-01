// AXIOS LIBRARY (BASIC → ADVANCED)
// ================================

// Axios is a promise-based HTTP client
// used to make API calls (GET, POST, PUT, DELETE)

// Install:
// npm install axios


// =============================
// 1. BASIC GET REQUEST
// =============================
import axios from "axios";

axios.get("https://catfact.ninja/fact")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

/*
OUTPUT:
{
  fact: "Cats sleep 70% of their lives",
  length: 31
}
*/


// =============================
// 2. ASYNC / AWAIT GET (MOST USED)
// =============================
async function getData() {
  try {
    let res = await axios.get("https://catfact.ninja/fact");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

getData();


/*
OUTPUT:
{ fact: "...", length: 31 }
*/


// =============================
// 3. POST REQUEST
// =============================
console.log("post ..................................")
axios.post("https://example.com/api", {
  name: "Imran",
  age: 20
})
.then(res => console.log(res.data))
.catch(err => console.log(err));

/*
OUTPUT (depends on API):
{
  success: true,
  message: "Data saved",
  id: 101
}
*/


// =============================
// 4. PUT REQUEST (UPDATE)
// =============================
axios.put("https://example.com/api/1", {
  name: "Imran Updated"
})
.then(res => console.log(res.data));

/*
OUTPUT:
{
  id: 1,
  name: "Imran Updated"
}
*/


// =============================
// 5. DELETE REQUEST
// =============================
axios.delete("https://example.com/api/1")
  .then(res => console.log(res.data));

/*
OUTPUT:
{
  message: "Deleted successfully"
}
*/


// =============================
// 6. AXIOS RESPONSE OBJECT
// =============================
axios.get("https://catfact.ninja/fact")
  .then(res => {
    console.log(res.data);     // actual data
    console.log(res.status);   // 200
    console.log(res.headers);  // metadata
  });

/*
KEY POINTS:
✔ res.data → main response
✔ res.status → HTTP code
✔ res.headers → metadata
*/


// =============================
// 7. BASE URL CONFIG
// =============================
const api = axios.create({
  baseURL: "https://catfact.ninja"
});

api.get("/fact")
  .then(res => console.log(res.data));


/*
OUTPUT:
{ fact: "...", length: 31 }
*/


// =============================
// 8. HEADERS (AUTH TOKEN)
// =============================
axios.get("https://api.com/data", {
  headers: {
    Authorization: "Bearer TOKEN"
  }
});


/*
OUTPUT:
✔ If token valid → data
❌ If invalid → 401 Unauthorized
*/


// =============================
// 9. QUERY PARAMETERS
// =============================
axios.get("https://api.com/user", {
  params: {
    id: 5,
    name: "imran"
  }
});


/*
OUTPUT:
GET /user?id=5&name=imran
*/


// =============================
// 10. ERROR HANDLING (IMPORTANT)
// =============================
axios.get("https://api.com/wrong")
  .then(res => console.log(res.data))
  .catch(err => {
    console.log(err.response.status); // 404
    console.log(err.message);
  });


/*
OUTPUT:
404
Request failed with status code 404
*/


// =============================
// 11. INTERCEPTORS (ADVANCED)
// =============================
axios.interceptors.request.use(config => {
  console.log("Request Sent");
  return config;
});

axios.interceptors.response.use(response => {
  console.log("Response Received");
  return response;
});


/*
OUTPUT:
Request Sent
Response Received
*/


// =============================
// 12. CANCELLING REQUEST
// =============================
const controller = new AbortController();

axios.get("https://api.com/data", {
  signal: controller.signal
});

controller.abort();


/*
OUTPUT:
Request canceled / aborted
*/


// =============================
// 13. AXIOS INSTANCE (PRO LEVEL)
// =============================
const apiClient = axios.create({
  baseURL: "https://api.com",
  timeout: 5000
});

apiClient.get("/users")
  .then(res => console.log(res.data));


/*
OUTPUT:
User list from API
*/


// =============================
// AXIOS VS FETCH (SHORT IDEA)
// =============================

/*
FETCH:
- Built-in browser API
- Manual JSON parsing
- More code

AXIOS:
- External library
- Auto JSON parsing
- Cleaner syntax
- Better error handling
*/


// axios.get()    → GET data
// axios.post()   → send data
// axios.put()    → update data
// axios.delete() → delete data

// res.data       → main response
// res.status     → HTTP code