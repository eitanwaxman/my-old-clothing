import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart item/cart-item.component";
import "./shopping-cart-dropdown.styles.scss";

const ShoppingCartDropdown = () => {
  const { items } = useContext(CartContext);
  let navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="empty-message"></div>
      <div className="cart-items">
        {items &&
          items.map(({ id, imageUrl, name, quantity, price }) => (
            <CartItem
              key={id}
              imageUrl={imageUrl}
              name={name}
              quantity={quantity}
              price={price}
            />
          ))}
      </div>
      <Button onClick={handleCheckout} label="Go To Cart" />
    </div>
  );
};

export default ShoppingCartDropdown;
