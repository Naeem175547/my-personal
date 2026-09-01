import { useCart } from "../context/CartProvider"


export default function ProductItem({product}) {
    const {setCart}=useCart();
    function addItem(product){
        setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
         
    }


  return (
    <div className=" border rounded text-center py-3">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button onClick={()=>{addItem(product)}} className="btn btn-primary">Add to Cart</button>

    </div>
  )
}
