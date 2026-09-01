const API="http://localhost:5000/api/students"

let currPage=1;
let currQuery=""
const token=localStorage.getItem("token")


//fetching data
async function fetchAndPrintData(query="",page=1){
    if(!token) {
        alert("you are not logged in")
        window.location.href='login.html'
    }
    currPage=page
    currQuery=query
    try{
    
   const res = await fetch(`${API}?query=${encodeURIComponent(query)}&page=${page}&limit=${2}`,{
    headers:{
        "authorization":`bearer ${token}`
    }
   });
   const data=await res.json()
    //now adding data to table
    let tbody=document.querySelector("#studentData")
    tbody.innerHTML=''

    data.students.forEach((student)=>{
        tbody.innerHTML+=` <tr>
                    <td>
                   <img 
                      src="http://localhost:5000/images/${student.profilePic}" 
                     class="rounded-circle border shadow-sm object-fit-cover"
                      style="width:60px; height:60px;"
                       />
                    </td>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.email}</td>
                    <td>${student.phone}</td>
                    <td>${student.gender}</td>
                    <td>
                    <div class="btn-group-sm">
                    <button class="btn btn-secondary" onclick="viewStudent('${student._id}') " data-bs-toggle="modal" data-bs-target="#viewStudentModal">View</button>
                    <button class="btn btn-success" data-bs-toggle="modal" onclick="editStudent('${student._id}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteStudent('${student._id}')" onclick="updateStudentData()">Delete</button>
                    </div>

                    </td>
                </tr>`

        
       
    })
    pagination(data.pages)
    }
    catch(err){
        console.log(err.message)
    }

}
fetchAndPrintData()

function pagination(pages){
    const ul=document.getElementById("pagination")
    ul.innerHTML=''
    //creating previous 
    const previous=document.createElement('li');
        previous.className = "page-item " + (currPage==1 ? "disabled" : "");
        previous.innerHTML=`<a class=page-link>previous</a>`       
        previous.addEventListener('click',()=>{
            
            fetchAndPrintData(currQuery,currPage-1)
        })

        ul.append(previous)
       
    
    



    for(let i=1;i<=pages;i++){
        const li=document.createElement('li');
        li.className = "page-item " + (i == currPage ? "active" : "");
        li.innerHTML=`<a class=page-link>${i}</a>`       
        li.addEventListener('click',()=>{
            
            fetchAndPrintData(currQuery,i)
        })
        ul.append(li)    

    }
    //next button
      const li=document.createElement('li');
        li.className = "page-item " + (currPage==pages ? "disabled" : "");
        li.innerHTML=`<a class=page-link>next</a>`       
        li.addEventListener('click',()=>{
            
            fetchAndPrintData(currQuery,currPage+1)
        })

        ul.append(li)
}


//search implementing
document.querySelector("#search").addEventListener('input',(e)=>{
    const query=e.target.value;
    fetchAndPrintData(query)
})


//adding student
document.querySelector('#form').addEventListener('submit',async (e)=>{
    e.preventDefault()
   try{
     const student=new FormData(e.target)
    await fetch(`${API}`, {
    method: "POST",
    body: student,
     headers:{
        "authorization":`bearer ${token}`
        }
})
   }
   catch(e){
    console.log(e.message)
   }

    const modal = bootstrap.Modal.getInstance(
            document.getElementById('addStudentModal')
        )
        modal.hide()
    fetchAndPrintData()


   
})




//viewing particular student
async function viewStudent(id){
    try{
        const res = await fetch(`${API}/${id}`,{
            headers:{
        "authorization":`bearer ${token}`
        }
        });
        if(!res.ok){
            new Error("data not found")
        }
        const student = await res.json();
        document.querySelector('#viewProfilePic').src = `http://localhost:5000/images/${student.profilePic}`;
        
        document.querySelector("#viewName").textContent=`${student.firstName} ${student.lastName}`
        document.querySelector("#viewPhone").textContent=`${student.phone}`
        document.querySelector("#viewEmail").textContent=`${student.email}`
        document.querySelector("#viewGender").textContent=`${student.gender}`


       
    }
    catch(err){
        alert(err.message);
    }
}


  // Update Student Modal Box
  async function editStudent(id){
   
    const res = await fetch(
      `${API}/${id}`,
      {
        headers:{
        "authorization":`bearer ${token}`
    }
      }
      
      
      
    )
    const student = await res.json()
   
    document.querySelector('#editStudentId').value = student._id
    document.querySelector('#editFirstName').value = student.firstName
    document.querySelector('#editLastName').value = student.lastName
    document.querySelector('#editEmail').value = student.email
    document.querySelector('#editPhone').value = student.phone
    document.querySelector('#editGender').value = student.gender

    new bootstrap.Modal(document.querySelector("#editStudentModal")).show() 
 }

 //update data
  document.querySelector("#editStudentForm").addEventListener("submit",async function(e){
    e.preventDefault()
    const id = document.querySelector("#editStudentId").value    
    const formData = new FormData(this)
    const res = await fetch(`${API}/${id}`, {
      method: 'PUT',
      body: formData,
      headers:{
        "authorization":`bearer ${token}`
    }
     
    })

    if(res.ok){
      bootstrap.Modal.getInstance(document.querySelector("#editStudentModal")).hide()
       fetchAndPrintData();
     
    }else{
      alert('Error updating student.')
    }
  })





//delete student
async function deleteStudent(id) {
    if(!confirm("are you sure to delete data")){
        return;
    }
    try {
        const res = await fetch(`${API}/${id}`, {
            method: 'DELETE',
            headers:{
        "authorization":`bearer ${token}`
    }
        });


        if (!res.ok) {
            throw new Error("Failed to delete student");
        }

        // refresh table
        fetchAndPrintData();
    }
    catch (err) {
        alert(err.message);
    }
}


