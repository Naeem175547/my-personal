
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartProvider'

export default function Nav() {
    const {cart}=useCart();
  return (
    <nav>
    <div className='container'>
    <div className='row justify-content-between align-items-center'>
        <div className='col-6'>
        <h1>🛒 MyShop</h1>

        </div>
        <div className='col-6 d-flex justify-content-end gap-3' >
        <Link to={'/'} className='link'>Home</Link>
        <Link to={'/cart'}  className='link'>Cart({cart.length})</Link>

        </div>
    </div>

    </div>


        
    </nav>
    
  )
}
