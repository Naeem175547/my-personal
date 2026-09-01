for(let i=0;i<5;i++){
    setTimeout(()=> console.log(i),1000);
}
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);

}
var a=10;
{
    console.log(a)
    var a=20;

} 
console.log(a)




