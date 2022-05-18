import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckOut = () => {
  const { items, addItem, removeItem, removeAll, totalPrice } =
    useContext(CartContext);
  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-header">
          {["Product", "Description", "Quantity", "Price", "Remove"].map(
            (header, index) => (
              <p key={index} className="header-block">
                {header}
              </p>
            )
          )}
        </div>
        {items.map((item) => (
          <CheckoutItem
            key={item.id}
            cartItem={item}
            addItem={addItem}
            removeItem={removeItem}
            removeAll={removeAll}
          />
        ))}
        <p className="total">Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckOut;
