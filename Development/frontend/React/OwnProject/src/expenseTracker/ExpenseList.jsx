
import ExpenseItem from './ExpenseItem'

export default function ExpenseList({expenses,onDelete}) {
    if(expenses.length==0){
        return <p style={{textAlign:"center"}}>No expense yet</p>
    }
  return (

    <>
    {
        expenses.map((expense)=>(
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete}/>

        ))
    }

    </>



    
  )
}
