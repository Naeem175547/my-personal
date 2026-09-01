import { useState } from "react";
export default function State(){
    const [count,setCount]=useState(0);
    console.log(count);
    const increase=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={increase}>Increase</button>
        </div>
    )


}