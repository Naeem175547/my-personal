import React from 'react'
import Greeting from './Greeting'
import GreetingWithStyle from './GreetingWithStyle'

export default function HigherOrderFun() {
  return (
   <>
     <div>HigherOrderFun</div>
     {/* <Greeting name="imrak"/> */}
     <GreetingWithStyle name="sanchit"/>
   </>
  )
}
