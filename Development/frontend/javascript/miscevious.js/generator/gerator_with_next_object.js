function *gen(){
    console.log("genertor starting...;");
    yield "first value yield";
    console.log("middle of gen");
    yield;
    console.log("gen is about to complete");
    yield "last yield vlue";
    console.log("completed generator");

}
let x=gen();
console.log(x.next());   /*apart from running program until yield  come .next() also return a object like iterator but value of object is what we yeild by default undefine*/
console.log(x.next()); 

console.log(x.next()); 
 
if(x.next().done){
    console.log("generator completed");
}



