import { useState } from "react";

export default function Student(){
    const [Student,setStudent]=useState({
        name:"John",
        grade:"A",
        city:"Dehli"
    })
    const changeCity=()=>{
        setStudent({...Student,city:"Mumbai"});

    }
    return (
        <div>
            <h2>Name:{Student.name}</h2>
            <p>Grade:{Student.grade}</p>
            <p>City:{Student.city}</p>
            <button onClick={changeCity}>change CIty</button>
        </div>

    )
}