function ArrayAndObj(){
    const fruits=["apple","banana","orange"]
    const user={fisrtname:"john",lastName:"doe",age:25};
    function fullName(obj){
        return obj.fisrtname+""+obj.lastName;
    }


    return <div>
        <h2>Fruit List</h2>
        <ul>
        {/* {fruits} react can render array directly */}
        
            {fruits.map((value,index)=>(
                <li>{index}-{value}</li>
            ))}
            
                <h3>{user.fisrtname}</h3>
                <h3>{user.age}</h3>
                <h3>{fullName(user)}</h3>
            
        </ul>
    </div>

}
export default ArrayAndObj;