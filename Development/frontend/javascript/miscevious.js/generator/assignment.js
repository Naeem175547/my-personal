function downloader(url){
    return new Promise((res,rej)=>{
        console.log("downloading starting......")
        setTimeout(()=>{
            console.log("downloading completed.....")
            let data="dummytext"
            res(data)

        },4000)
    })

}
function writeFile(data){
    return new Promise((res,rej)=>{
        console.log("writing starting......")
        setTimeout(()=>{
            console.log("writing completed.....")
            let fileName="dummy.txt"
            res(fileName)

        },2000)
    })

}

function uploadedFile(fileName,newUrl){
    return new Promise((res,rej)=>{
        console.log("uploading starting......")
        setTimeout(()=>{
            console.log("uploading completed.....")
            let status="success"
            res(status)

        },3000)
    })

}

function *steps(){
    const downloaddata=yield downloader("www.google.com")
    console.log("Data downloaded is ",downloaddata)

    const fileName=yield writeFile(downloaddata )
    console.log("file written",fileName)

    const upload= yield uploadedFile(fileName,"www.drive.google.in")
    console.log("uploaded response")

}


function doAfterReceiving(value){
    const f=x.next(value)
    if(f.done==true)
        return
    f.value.then(doAfterReceiving)
}
const x=steps()
let future=x.next()

future.value.then(doAfterReceiving)


