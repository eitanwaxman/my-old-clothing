import "./button.styles.scss";

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ label, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
