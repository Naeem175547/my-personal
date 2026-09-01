import  { useState,useRef } from 'react'

export default function Form({onAddExpense}) {
  const [title,setTitle]=useState('')
  const [amount,setAmount]=useState()
  const titleRef=useRef()
  function handleSubmit(e){
    e.preventDefault();
    if(!title || !amount ) return alert("please fill required file")
    const newExpense={
      id:Date.now(),
      title,
      amount:parseFloat(amount)

    }
    onAddExpense(newExpense)
    setAmount("")
    setTitle("")
    titleRef.current.focus()
    

  }
  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Expense Title'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        ref={titleRef}


        />
        <input

            type='number'
            placeholder='Amount'
            value={amount}
            onChange={(e)=>{setAmount(e.target.value)}}


        />
        <button type='submit'>Add Expense</button>

    </form>
    
  )
}
