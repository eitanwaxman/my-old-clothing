import { useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const ShoppingCart = ({ onClickHandler }) => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div onClick={onClickHandler} className="cart-icon-container">
      <CartIcon className="shopping-icon" />
      <div className="item-count">{totalQuantity}</div>
    </div>
  );
};

export default ShoppingCart;
