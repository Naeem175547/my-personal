function ConditionalReadering(){
    const isLoggedIn=true;
    let message;
    if(isLoggedIn){
        message=<h1>Welcome</h1>;
    }
    else{
        message=<h2>Please login</h2>
    }
    return <div>{message}</div>
    

//     return <div> 
// {isLoggedIn?<h1>WElcome:user</h1>:<h1>please login</h1>}
// return {isLoggedIn && <p>You have new message</p>}

        
//     </div>


}
export default ConditionalReadering;