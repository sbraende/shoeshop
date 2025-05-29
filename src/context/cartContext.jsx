import { count } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";

const cartContext = createContext();

// const updateLocalStorageCart = (value) => {
//   return localStorage.setItem("cart", value);
// };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addedProduct":
      const itemInCart = state.find((p) => p.product.id === action.payload.id);

      if (itemInCart) {
        return state.map((p) =>
          p.product.id === action.payload.id ? { ...p, count: p.count + 1 } : p
        );
      }

      return [...state, { product: action.payload, count: 1 }];

    case "removedProduct":
      return state.filter((p) => p.product.id !== action.payload.id);

    case "incrementProductCount":
      return state.map((p) =>
        p.product.id === action.payload.id ? { ...p, count: p.count + 1 } : p
      );

    case "decrementProductCount":
      return state.map((p) =>
        p.product.id === action.payload.id ? { ...p, count: p.count - 1 } : p
      );

    default:
      break;
  }
};

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
