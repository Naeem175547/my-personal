// 🌈 FormData in JavaScript
// ✨ **FormData** is a built-in JavaScript Web API class.
// ## 📌 Syntax 
// const formData = new FormData(formElement)
// ## 🚀 What it does

// ✅ Collects all form input data automatically.
// ✅ Used to send form data to the server using `fetch()` or `axios()`.

// ## 💡 Example

// ```js 
// const formData = new FormData(this)
// ```

// ## 🔄 Returns
// 📦 It creates a **FormData object** (not JSON directly).
// ### 🎯 Example
// formData.get("username")

// 📌 FormData – 5 Important Points

// 1. FormData is a Web API object (not JSON or plain JS object)
//    → Used in browsers to handle form submissions.

// 2. It stores data in key–value pairs
//    → Example: username → John, email → test@gmail.com

// 3. It can handle files (images, PDFs, etc.)
//    → File input is stored as File/Blob object.

// 4. It sends data as multipart/form-data format
//    → Used in HTTP requests when submitting forms.

// 5. It is mainly used with fetch() or axios for API calls
//    → Especially useful for file upload to backend.

// 📌 What to pass in fetch body (important)

// 1. You CANNOT pass a plain JavaScript object directly in body
//    → It will not send correctly (becomes [object Object])

// 2. For normal data (no files), use JSON
//    → body: JSON.stringify({ name: "John" })
//    → add header: "Content-Type": "application/json"

// 3. For file uploads, use FormData
//    → body: formData
//    → no need to set Content-Type manually

// 4. Rule:
//    → Plain object ❌ not allowed
//    → JSON.stringify() ✔ for text data
//    → FormData ✔ for files + forms

// 5. Always choose format based on data type:
//    → Text data → JSON
//    → File data → FormData



// 📌 How to access all form data

// 1. BEST METHOD → FormData
//    const form = document.getElementById("myForm");
//    const formData = new FormData(form);
//   → Output:
//    FormData {}

//    → Get all data:
//    for (let [key, value] of formData.entries()) {
//      console.log(key, value);
//    }

// 2. MANUAL METHOD (small forms)
//    const data = {
//      name: form.name.value,
//      email: form.email.value
//    };

// 3. LOOP METHOD (no FormData)
//    const data = {};
//    for (let element of form.elements) {
//      if (element.name) {
//        data[element.name] = element.value;
//      }
//    }

// 4. BEST PRACTICE
//    → Use FormData for full form + files
//    → Use manual/loop only for simple forms

// 5. FINAL RULE
//    → FormData = easiest + auto collects everything
//    → JS object = manual collection


//we can access value form it using these method

// | Method    | Use               |
// | --------- | ----------------- |
// | append()  | add data          |
// | get()     | read single value |
// | set()     | replace value     |
// | has()     | check field       |
// | delete()  | remove field      |
// | entries() | debug all data    |
