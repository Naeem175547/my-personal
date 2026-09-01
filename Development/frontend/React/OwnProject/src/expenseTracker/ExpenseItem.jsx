

export default function ExpenseItem({expense,onDelete}) {
    const style={display:"flex", justifyContent:"space-between"}
  return (
    <>
        <div style={style}>
            <span>{expense.title}</span>
            <span >{expense.amount}</span>
            <button onClick={()=>onDelete(expense.id)}>X</button>
        </div>
    </>
    
  )
}
