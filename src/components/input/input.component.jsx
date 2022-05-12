import "./input.styles.scss";

const Input = ({ label, ...inputProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputProps} />
      <label
        className={`form-input-label ${inputProps.value ? "shrink" : null}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
