import { createContext, useEffect, useState } from "react";

const cartState = {
  cart: false,
  setCart: () => {},
  items: [],
  addItem: () => {},
  removeItem: () => {},
  totalQuantity: 0,
  totalPrice: 0,
};

export const CartContext = createContext(cartState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const removeItem = (product) => {
    let newItemsArray = [];
    let itemExistsInCart = items.find((item) => item.id === product.id);

    if (itemExistsInCart.quantity > 1) {
      newItemsArray = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      newItemsArray = items.filter((item) => item.id !== product.id);
    }

    setItems(newItemsArray);
  };

  const removeAll = (product) => {
    let newItemsArray = [];
    newItemsArray = items.filter((item) => item.id !== product.id);
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

  const calculateTotalPrice = () => {
    if (items.length > 0) {
      let cartItems = [...items];
      let totalPrice = cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      console.log(totalPrice);
      return totalPrice;
    }
    return 0;
  };

  useEffect(() => {
    setTotalQuantity(calculateQuantity(items));
  }, [items]);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(items));
  }, [items]);

  const value = {
    cart,
    setCart,
    items,
    setItems,
    addItem,
    removeItem,
    removeAll,
    totalQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
