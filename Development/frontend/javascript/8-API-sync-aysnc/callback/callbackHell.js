h1=document.querySelector("h1")
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },1000)
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    })
})

//solution of callback hello - promises

// why above
//because it below sometime work out of order
function changeColor(color,delay){
    setTimeout(()=>{
        h1.style.color=color;
      
    },1000)
}
changeColor("red",1000)
changeColor("green",1000)
changeColor("yellow",1000)
