import ProductItem from "./ProductItem"



export default function ProductList() {
    const products = [
    { id:1, name: "Laptop", price: 800},
    { id:2, name: "Phone", price: 500},
    { id:3, name: "HeadPhones", price: 100},
    { id:4, name: "Keyboard", price: 70},
    { id:5, name: "Mouse", price: 250},
]

  return (
    <div className='row g-2 '>
    {products.map((product)=>(
        <div className="col-3 " key={product.id}>
        <ProductItem  product={product}/>


        </div>

    ))}

    

    </div>
  )
}
