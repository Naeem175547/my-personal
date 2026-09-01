import { useCart } from "../context/CartProvider"


export default function Cart() {
    const {cart,setCart}=useCart();
    if(cart.length==0){
        return <div className="alert alert-primary"><p>No items in cart</p></div>
    }
    function removeproduct(product){
        setCart(prev=>(
            prev.filter((item)=>(
                item.id!==product.id                
            )
            )

        ))

    }

    function handleUpdate(product,value){
        setCart(prev=>(
            prev.map((item)=>(
                item.id==product.id?{...item,qty:value}:{...item}
            ))
        ))
    }
         
    

    const total=cart.reduce((ac,item)=>ac+item.qty*item.price,0)

  return (
    <div className="table-responsive "> 
    <table className="table table-striped table-bordered table-hover align-middle">
   <thead className="table-dark">
     <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Subtotal</th>
        <th></th>
    </tr>

   </thead>
   <tbody>
   {cart.map((product)=>(
    <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
        <input type="number"
        min={1}
        value={product.qty}
        onChange={(e)=>handleUpdate(product,Number(e.target.value))}

        />

            
        </td>
        <td>${product.qty*product.price}</td>
        <td><button className="btn btn-secondary" onClick={()=>removeproduct(product)}>Remove</button></td>
        
    </tr>


   ))}


   </tbody>



    </table>
    <footer className="text-end">
        <p>Total:${total}</p>
    </footer>


    </div>



    
  )
}
