import { useState, useEffect } from 'react'

function First() {
    const [count, setCount] = useState(0)
    

    useEffect(() => {
        document.title = `Count: ${count}`
        console.log("Component Re-rendered!")
        // console.log(document)
        // console.log(window)
    },[count])

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default First