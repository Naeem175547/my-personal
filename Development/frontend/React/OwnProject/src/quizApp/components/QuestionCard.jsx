export default function QuestionCard({question,options,onSelect}) {
  return (
    <div card shodow p-4>
    <h4 className='fw-semibold'>{question}</h4>
    <div className='mt-3'>
    {options.map((opt,i)=>(
        <button
        key={i}
        className='btn btn-outline-primary mt-2 w-100'
        onClick={()=>onSelect(opt)}    
        >
            {opt}
        </button>
    ))}

    </div>
          

    </div>
  )
}
