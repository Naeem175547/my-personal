import { useEffect, useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpernseForm from "./ExpeserForm";
import "./style.css"

export default function ExpenseTracker(){
    const [expenses,setExpenses]=useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : [];
  });
    const addExpense=(expense)=>{
        setExpenses((prev)=>[...prev,expense])
    }
    useEffect(()=>{
        localStorage.setItem("expenses", JSON.stringify(expenses))
    },[expenses])
    // Delete Expense
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id != id) )
  }
  const totalExpenses  = expenses.reduce((sum, item) => sum + item.amount, 0)
    return(
        <div className="app-container">
        <h1>💰 Experse Tracker</h1>
         <ExpernseForm onAddExpense={addExpense}/>
         <h3>Total Expese:: ₹{totalExpenses.toFixed(2)}</h3>
         <ExpenseList expenses={expenses} onDelete={deleteExpense} />


        </div>
    )


}