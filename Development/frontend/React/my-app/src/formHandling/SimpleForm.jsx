import { useState } from "react"

export default function SimpleForm(){
    const [name,setName]=useState("")
    const [email,setemail]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name: ",name)
        console.log("Email: ",email)
    }
    return(
        <form onSubmit={handleSubmit}>
        <h2>React From Example</h2>
        <label>Name:</label>
        <input type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}


         />
        <br/>
        <label>Email:</label>
        <input type="email"
         value={email}
         onChange={(e)=>setemail(e.target.value)}

         />
        <br/>
        <button type="submit">Submit</button>

        </form>
    )
}