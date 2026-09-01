//1 topic

// function *gen(){
//     yield 55;
//     yield ['node','angulr','react'];
// }
// let g=gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// //2nd topic 

// function *gen(){
//     yield 55;
//     yield* ['node','angulr','react'];
// }
// let g=gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// 3 topic with sperad operator

function *gen(){
    yield "PHP";
    yield "Node";
    yield "Angular";
    yield "React";
}
let a=gen();
console.log(a.next().value);
console.log(a.next().value);
console.log([...a]); //it will give array with all remining value
console.log(a.next());

