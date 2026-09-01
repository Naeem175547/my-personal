function downloadScriptFromIdeoneAndPopulateDatabase() {
    // this was an old function

    console.log("Old function implementation");
}


// more code  8000 lines
downloadScriptFromIdeoneAndPopulateDatabase();
// somewhere between



// intern by mistake makes the same function
if(true) {
    function downloadScriptFromIdeoneAndPopulateDatabase() {
        console.log("New function created");
    }
    console.log("Calling intern code")
    downloadScriptFromIdeoneAndPopulateDatabase();
}


downloadScriptFromIdeoneAndPopulateDatabase();


//“If function declarations are hoisted with definition, why doesn’t the second one affect the first call?
// 🔥 WHY IT DOES NOT AFFECT FIRST CALL?
// Because:
// 👉 In NON-STRICT MODE:
// Block function does NOT overwrite immediately in execution flow
// It behaves like a SEPARATE scope binding
// ✔ It becomes active only inside the block execution context first
