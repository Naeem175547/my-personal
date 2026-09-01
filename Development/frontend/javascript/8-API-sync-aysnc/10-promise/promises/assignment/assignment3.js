function downdeder(url){
    return new Promise((res,rej)=>{
        console.log("downloading starting...")
        setTimeout(()=>{
            console.log("donwloading completed")
            let data="hi how are you"
            res(data)

        },4000)

    })
}

function writeFile(data){
    return new Promise((res,rej)=>{
        console.log("writing  starting...")
        setTimeout(()=>{
            console.log("writing completed")
            let fileName="abc.txt"
            res(fileName)

        },2000)

    })
}

function uploadedFile(fileName,newUrl){
    return new Promise((res,rej)=>{
        console.log("uploading  starting...")
        setTimeout(()=>{
            console.log("uploading completed")
            res(newUrl)

        },2000)

    })
}
// downdeder("www.google.com")
// .then((data)=>{
//     writeFile(data)
//     .then((fileName)=>{
//         uploadedFile(fileName,"www.drive.google.in")
//         .then((newUrl)=>{
//             console.log("data is uploaded in",newUrl)
//         })
//     })
// })

downdeder("www.google.com")
.then((data)=>writeFile(data))
.then((fileName)=>uploadedFile(fileName,"www.drive.google.in"))
.then((newUrl)=>{
    console.log("data is uploaded to ",newUrl)
})


