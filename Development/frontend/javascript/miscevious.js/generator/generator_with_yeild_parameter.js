function *abc(){
    let x=yield "imran";
    console.log(`result ${x}`);
    
}
let g=abc();
// g.next();
console.log(g.next());
g.next(500);