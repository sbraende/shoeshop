import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, [], () => {
    const local = localStorage.getItem("cart");
    return local ? JSON.parse(local) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

export const getCartContext = () => useContext(cartContext);
