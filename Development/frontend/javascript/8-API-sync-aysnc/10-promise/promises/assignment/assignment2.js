function download(url,cb){
    console.log("downloading starting")
    setTimeout(() => {
        console.log("downded complete")
        const data="my name is mohammad naeem"
        cb(data)
        
    }, 4000);
}
function writeFile(data,cb){
    console.log("writing  start.....")
    setTimeout(()=>{
        console.log("writing completed")
        const file="abc.txt"
        cb(file)

        

    },3000)
}

function uploadFile(fileName,newurl,cb){
    console.log("uploading file.....")
    setTimeout(()=>{
        console.log("uploaded completed")
        const file="abc.txt"
        cb(fileName,newurl)

        

    },3000)
}

download("www.google.com",(data)=>{
    writeFile(data,(fileName)=>{
        uploadFile(fileName,"www.gooogle.in",()=>{
            console.log(data,"is uploaded inside ",fileName,"in www.google.com")
        })
    })
})



