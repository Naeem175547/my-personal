//first example
const obj = {
    func1: function f(x) {
        console.log("F called")
         return {
            func2: function g() {
                console.log("G called");
            }
        };
    } 
}
// obj.func1(10).func2();





//second example


let obj2={
    abc:function(x){
        console.log("function abc is running ="+x);
        return {
            abc2:function(x){
                console.log("function abc2 is running ="+x)
                return{
                    abc3:function(y){
                        console.log("function abc3 is running ="+x)
                    }
                }
            }
        }
    }
}
// obj2.abc(4).abc2(5).abc3(10)


//third example
let obj3={
    fun1:()=>{
        console.log("function fun1 is running");
        return function(){
            console.log("inside fun is running");
        }
    }
}

// obj3.fun1()();

//forth example
function a(){
    console.log("imran")
}
(function(){
    function a(){
        console.log("shayan..")
    }
    a();
})()
a()



//fifth example(curring)
function volumue2(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}
console.log(volumue2(2)(3)(4))