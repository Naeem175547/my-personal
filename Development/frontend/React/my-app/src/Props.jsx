export default function Props(props){
    // const {name,age,city}=props;//des
return (
    <div>
        <h2>hello,{props.name}</h2>
        <p>age:{props.age}</p>
        <p>City:{props.city}</p>
        <ul>
       { props.hobbies.map((value,index)=>(
            <li>{index}-{value}</li>
        ))
       }

        </ul>
    </div>
)
}
