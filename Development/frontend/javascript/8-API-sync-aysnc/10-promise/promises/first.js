// console.log(new Promise(()=>{

// }))


//  console.log(new Promise((res,rej)=>{
//  }))
//always pending if we don't call res,rej function 



// console.log(new Promise((res)=>{
//     res("imrankhjan")
// }))



// basic understanding
// function prom(con){
//     return new Promise((res,rej)=>{
//         if(con){
//             res("success1");
//         }
//         else{
//             rej("failure");
//         }      
        
   
// })
// }


function prom(con){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(con){
                res("success1");
                // res("imrankhan") this will not affect first res so this will skip only first will run                
                
                console.log("fullfilled")
            }
            else{
                rej("failure");
            }
        },5000)      
        
   
})
}



// console.log(prom(true))

// prom(true).then((value)=>{
//     console.log(value);
// })

// prom(false).catch((value)=>{//in  lecture 5 full use of catch
//     console.log(value);
// })


// prom(false).then((value)=>{
//     console.log("for fulfilled")
//     console.log(value);
    
// },(value)=>{
//     console.log("for rejcted")
//     console.log(value);
// })

// prom(false).then((value)=>{
//     console.log("for fulfilled")
//     console.log(value);
    
// },(value)=>{
//     console.log("for rejcted")
//     console.log(value);
// }).catch((value)=>{
//     console.log("catch is running")
//     console.log(value)

// })


//asume it is chaining
// prom(true).then((value)=>{
//     console.log("for fulfilled")
//     console.log(value);
// }).catch((value)=>{
//     console.log("for rejcted")
//     console.log(value);
// }).finally((value)=>{//finaly take no value;
//     console.log("it will run for both",value)//undefine
// })
// console.log("chal na");