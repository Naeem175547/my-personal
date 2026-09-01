import { useState, useCallback} from 'react'

function Counter() {
  const [count, setCount] = useState(0)  
//   const increment=()=>{
//     setCount(count+1);
//   }

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
    // setCount(count+1); //this will take reference of first time but if we take [count] then it will recreate defiantion again of fun
  }, [count])
    
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increase</button>
    </div>
  )
}

export default Counter