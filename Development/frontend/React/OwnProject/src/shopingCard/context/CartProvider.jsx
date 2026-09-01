import { useContext, createContext, useState } from "react";

// 1. Context object
const CartContext = createContext();

// 2. Provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Custom hook
export const useCart = () => useContext(CartContext);