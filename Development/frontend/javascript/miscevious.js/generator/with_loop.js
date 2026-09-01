function *gen(){
    console.log("genertor starting...;");
    yield "first value yield";
    console.log("middle of gen");
    yield
    console.log("gen is about to complete");
    yield "last yield vlue";
    console.log("completed generator");

}
let x=gen();
for(let value of x){
    console.log(value);
}