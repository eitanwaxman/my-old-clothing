import { createContext, useEffect, useState } from "react";

const cartState = {
  cart: false,
  setCart: () => {},
  items: [],
  addItem: () => {},
  totalQuantity: 0,
};

export const CartContext = createContext(cartState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (product) => {
    let newItemsArray = [];
    let itemExistsInCart = items.find((item) => item.id === product.id);

    if (itemExistsInCart) {
      newItemsArray = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newItemsArray = [...items, { ...product, quantity: 1 }];
    }
    setItems(newItemsArray);
  };

  const calculateQuantity = (items) => {
    if (items.length > 0) {
      let cartItems = [...items];
      let totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      console.log(totalQuantity);
      return totalQuantity;
    }
    return 0;
  };

  useEffect(() => {
    setTotalQuantity(calculateQuantity(items));
  }, [items]);

  const value = { cart, setCart, items, setItems, addItem, totalQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
