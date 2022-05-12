import PRODUCTS from "../shopdata.json";
import { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  //signOutWithGoogle();

  useEffect(() => {}, []);

  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
