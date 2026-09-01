import React from 'react'
import Cart from '../component/Cart'

export default function CartPage() {
  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col text-center'><h1>Shopping Cart</h1></div>      
        </div>
        <div className='row'>
            <div className='col'><h2>Your Cart</h2></div>
        </div>
        <Cart/>
       
        </div>
        
        

    </div>
    

  )
}
