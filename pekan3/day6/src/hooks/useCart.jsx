import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = useCallback((product, quantityToAdd = 1) => {
    if (!product || !product.id || quantityToAdd <= 0) {
      return;
    }

    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }

      return [
        ...prevItems,
        { ...product, quantity: quantityToAdd, price: product.price ?? 0 },
      ];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearItem = useCallback((productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totals = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.quantity * (item.price ?? 0),
      0
    );

    return { totalItems, totalPrice };
  }, [items]);
  const { totalItems, totalPrice } = totals;

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clearItem,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [items, addItem, removeItem, clearItem, clearCart, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
