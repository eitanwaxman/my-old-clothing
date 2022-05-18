import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, addItem, removeItem, removeAll }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const handleRemoveOneItem = () => {
    removeItem(cartItem);
  };

  const handleAddOneItem = () => {
    addItem(cartItem);
  };

  const handleRemoveProductFromCart = () => {
    removeAll(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <img className="image-container" src={imageUrl} />
      <p className="name">{name}</p>
      <span className="quantity">
        <span className="arrow" onClick={handleRemoveOneItem}>
          {"<"}
        </span>
        <p className="value">{quantity}</p>
        <span className="arrow" onClick={handleAddOneItem}>
          {">"}
        </span>
      </span>
      <p className="price">${price}</p>

      <div className="remove-button" onClick={handleRemoveProductFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
