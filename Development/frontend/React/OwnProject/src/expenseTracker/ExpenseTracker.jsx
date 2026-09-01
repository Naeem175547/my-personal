import { useEffect, useState } from 'react'
import Form from './Form'
import ExpenseList from './ExpenseList'

export default function ExpenseTracker() {
    const [expenses,setExpenses]=useState(()=>{
        const data=localStorage.getItem('expenses')
        return data?JSON.parse(data):[]

    })
    function addExpense(newExpense){
        setExpenses([...expenses,newExpense])

    }
    function handleDelete(id){
        // console.log("reuest for delteting the item with id",id)
        // setExpenses(prev=>(prev.filter((expense)=>expense.id!=id)))
        const newExpesnes=expenses.filter((expense)=>expense.id!=id)
        setExpenses(newExpesnes)

    }
    useEffect(()=>{
        localStorage.setItem('expenses',JSON.stringify(expenses))

    }
    ,[expenses])

    const totalAmt=expenses.reduce((ac,expense)=>(expense.amount+ac),0)



  return (
         <div className='container'>
      <h2>Expense Trancker</h2>
      {/* form */}
      <Form
        onAddExpense={addExpense}
      />
      <h3>Total Experse:{totalAmt}</h3>
      {/* list */}
      <ExpenseList expenses={expenses} onDelete={handleDelete}/>
    </div>
  )
}
