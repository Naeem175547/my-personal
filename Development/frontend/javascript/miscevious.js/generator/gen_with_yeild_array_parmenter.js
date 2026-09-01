function *gen(){
    let result=[yield "imran",yield,yield];
    console.log(`result ${result}`);
    console.log(result[0])
}
let g=gen();
console.log(g.next());
g.next(500);
g.next(100);
g.next(50);
