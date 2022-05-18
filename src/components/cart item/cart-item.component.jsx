import "./cart-item.styles.scss";

const CartItem = ({ name, quantity, imageUrl, price }) => {
  return (
    <div className="cart-item-container">
      <img className="img" src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>${quantity * price}</span>
      </div>
    </div>
  );
};

export default CartItem;
