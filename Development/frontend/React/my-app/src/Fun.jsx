
function Fun(){
    function getName(name){
        // alert("imran khan")
        return name;

        
    }
    function handledClick(){
        alert("event has been handled")
    }
    const handledInput=(event)=>{
        // console.clear()
        console.log("Value:",event.target.value);
    }
    const name1="imran";
    const name2="shayan"

    return <>
    <h1>Hello {getName(name1)}</h1>
    <h2>Bye {getName(name2)}</h2>
    
    <button onClick={handledClick}>
        Click me
    </button>
    <button onClick={()=>alert("click form second button")}>
        Click me
    </button>
   <input  type="text" onChange={handledInput} placeholder="say something"/>

    </>
}
export default Fun;