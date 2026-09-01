import { useState } from "react"

function Parent(){
  const [text, setText] = useState("")

  return (
    <div>
      <InputBox onChange={setText} />//state lifting
      <Display value={text} />//shared state
    </div>
  )
}

function InputBox({ onChange }){
  return <input type="text" onChange={(e) => onChange(e.target.value)} />
}

function Display({ value }){
  return <h3>Typed : {value}</h3>
}

function App() {

  return (
    <>
      <Parent />
    </>
  )
}

export default App