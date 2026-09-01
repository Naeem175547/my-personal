async function text() {
    console.log("2: Messaage");
    let student = null;  // ✅ Declare student outside try-catch
    try {
        const response = await fetch("http://localhost:8000/student.json");//await waits and return resolve value not promise
        console.log("File has been founded");
        student = await response.json();
        console.log(student)
    } catch (error) {
        console.log("File is not found");
    }
    return student;
}

console.log("1 : Message");
let a = text();
console.log("4: Message");
console.log(a);  // Still prints a pending Promise
