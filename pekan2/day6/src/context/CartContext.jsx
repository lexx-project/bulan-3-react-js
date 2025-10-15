import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
