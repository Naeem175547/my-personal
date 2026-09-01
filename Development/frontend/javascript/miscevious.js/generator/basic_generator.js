function* abc(){
    console.log("A");
    yield;
    console.log("B")
    
    console.log("C")
    yield;
    console.log("d")
}
let x=abc();
// x.next();
console.log(x.next());
setTimeout(() => {
    x.next();
    
}, 1000);
setTimeout(() => {
    x.next();
    
}, 2000);
setTimeout(() => {
    x.next();
    
}, 3000);
setTimeout(() => {
    x.next();
    
}, 4000);

//generator give way to control a function