const api = 'http://localhost:5000/api/users'
const userRegister=document.querySelector('#registerForm')
const userLogin=document.querySelector('#loginForm')

if(userRegister){
    userRegister
.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
    }

    const res = await fetch(
        `${api}/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    )
    const data = await res.json()
    console.log(data)
    if(res.ok){
        alert(data.message)
        window.location.href="login.html"
    }
    else{
        alert(data.message)
    }
})
}

if(userLogin){
    userLogin.addEventListener('submit', async (e) => {
        e.preventDefault()

        try{
            const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const student = { username, email, password }
                const res = await fetch(`${api}/login`, {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                "Content-Type": "application/json",
                
            }
        })
         const data = await res.json()
         

        if(res.ok){
            alert("login successful")
            localStorage.setItem("token",data.token)
            window.location.href='Student.html'
        }
        else{
           
            alert(data.message)
        }
    }
    catch(err){
        alert(err.message)
    }

    })
}

//logout
//logout
document.querySelector("#logout").addEventListener('click',async(e)=>{
    e.preventDefault()
    const token=localStorage.getItem("token")
    const res=await fetch(`${api}/logout`,{
        method:"POST",
        headers:{        
        "authorization":`bearer ${token}`
    }    
    })
    const data=await res.json()

    if(res.ok){
        localStorage.removeItem("token")
        window.location.href='login.html'
        }
    else{
        alert(data.message)
    }
})