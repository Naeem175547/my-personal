function saveDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    console.log(internetSpeed)
    if(internetSpeed>4){
        success(data);        
    }
    else{
        failure()
    }
}
saveDb("imran",
    (data)=>{
        console.log("your data was saved:",data);
        saveDb("hello world",()=>{
            console.log("success2: data2 saved")
            saveDb("imran",
                ()=>{
                    console.log("success3")
                },
                ()=>{
                    console.log("failure3: weak connection")
                }

            )
        },
        ()=>{
            console.log("weak connection,data2 is not saved")
        }
    )
    },
    ()=>{
        console.log("weak connection, data not saved")

    }

)

//this is callback hell
//so use promises
function saveToData(data){
    return new Promise((success,failure)=>{
        let internetSpeed=Math.floor(Math.random()*10+1)
        if(internetSpeed>4){
            success("success:data was saved")
        }
        else{
            failure("failure:weak connection");
        }
    })
}
saveToData("imran")
.then(()=>{
    console.log("promises was resolved")
    return saveToData("hello world")
})
.then(()=>{
    console.log("data 2 savae")
    return saveToData("shayan khan")
})
.catch(()=>{
    console.log("promises is rejected");
})


