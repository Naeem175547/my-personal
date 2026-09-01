import React from "react";
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo() {
 const todos = useSelector((state) => state.todos);
 const dispatch=useDispatch()
  console.log(todos);
   function handleClick(id){
    dispatch(deleteTodo(id))    

  }

  return (
    <>
      <AddForm />
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
        <li key={todo.id}>{todo.task} 
        <button onClick={()=>{handleClick(todo.id)}}>Delete</button>
        </li>

        
      ))}
      </ul>
      
    </>
  );
}