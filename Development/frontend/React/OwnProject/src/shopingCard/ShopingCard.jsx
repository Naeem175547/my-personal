
import Nav from './component/Nav'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { CartProvider } from './context/CartProvider'
import CartPage from './pages/CartPage'


export default function ShopingCard() {
  return (
    
    <CartProvider>
         <BrowserRouter>
         <Nav/>
        <Routes>
             <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<CartPage/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
   

    
    
  )
}
