import { useState } from "react"
export default function MultiInputForm(){
     const [FormData,setFromData]=useState({
        name:"",email:"",age:""
     })
     function handledSubmit(e){
        e.preventDefault();
        console.log(FormData);

     }
     const handledChange=(e)=>{
        const {name,value}=e.target;
        setFromData((prev)=>(
            {
                ...prev,
                [name]:value//Square brackets = “open the variable and use its value”
            }
        ))
     }

    return (
        <form onSubmit={handledSubmit}>
            <h2>Multiple INput Form</h2>
            <input 
             name="name"
             type="text"
             placeholder="Name"
             value={FormData.name}
             onChange={handledChange}

              />
            <br/>
            <input name="email"
             type="email"
            placeholder="Email"
            value={FormData.email}
             onChange={handledChange}

              />
            <br/>
            <input 
            name="age" 
            type="number" 
            placeholder="age"
            value={FormData.age}
            onChange={handledChange}


            />
            <br/>
            <button type="submit">Submit</button>
        </form>


    )
}