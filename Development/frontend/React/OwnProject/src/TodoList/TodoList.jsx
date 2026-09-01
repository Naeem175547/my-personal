import  { useState } from 'react'

export default function TodoList() {
    const [newTodo,setNewTodo]=useState('')
    const [todos,setTodos]=useState([])
    function handleSubmit(e)    {
        e.preventDefault();    
        console.log(newTodo)
        if(newTodo){
            setTodos([...todos,{value:newTodo,completed:false}])
            setNewTodo('');
        }    
        console.log(todos)
        

    }
    function onDelete(index){
        
        const newTodos=[...todos]
        newTodos[index].completed=!newTodos[index].completed
        setTodos(newTodos)
       
        

    }
  return (
    <>
        <div style={{textAlign:'center',fontSize:'20px'}}>TodoList</div>
    <form>
    <input

        type='text'
        value={newTodo}
        onChange={(e)=>{setNewTodo(e.target.value)}}

    />
    <button 
    type='submit'
    onClick={handleSubmit}
    >Submit</button>
        
    </form>
    <ul>
        {todos.map((todo,index)=>(
            <li key={index}>
            <span style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.value}</span>
            <button
    style={{ display: "inline-block", marginLeft: '10px' }}
    onClick={() => onDelete(index)}
>
    Delete
</button>

            </li>
        )
        )}
    </ul>
    </>
  )
}
