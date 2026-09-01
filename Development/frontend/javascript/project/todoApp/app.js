let todo=[];
let req=prompt("please enter your request")
while(true){
    if(req=='quit' || req==""){
        console.log("quitting app")
        break;
    }
    if(req=="list"){
        console.log("-----------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i])
        }
        console.log("________________________")
    }
    else if(req=="add"){
        let task=prompt("please enter the task you want to add")
        todo.push(task)
        console.log("task added")
    }
    else if(req=='delete'){
        let idxx=prompt("please enter then index you want to delete")
        todo.splice(idxx,1);
        console.log("task deleted")


    }
    else{
        console.log("wrong input")


    }
    req=prompt("please enter your request")

}