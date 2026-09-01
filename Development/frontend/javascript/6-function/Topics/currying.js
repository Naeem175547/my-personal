function volumue(x,y,z){
    return x*y*z;
}
console.log(volumue(2,3,4))

function volumue2(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}
console.log(volumue2(2)(3)(4))