import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.bar.styles.scss";
// import { ReactComponent as Logo } from "../../assets/logo.png"; ONLY SVG
import { UserContext } from "../../contexts/user.context";
import { signOutWithGoogle } from "../../utils/firebase/firebase.utils";
import ShoppingCart from "../../components/cart icon/cart-icon.component";
import ShoppingCartDropdown from "../../components/shopping cart dropdown/shopping-cart-dropdown.componenet";
import { CartContext } from "../../contexts/cart.context";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutWithGoogle();
  };

  const cartHandler = () => {
    setCart(!cart);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <Logo /> */}
          <img
            className="logo"
            src="https://toppng.com//public/uploads/preview/dirty-clothes-clipart-pile-of-clothes-clipart-11563231494sn9ketdgwu.png"
          ></img>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/checkout">
            Checkout
          </Link>

          {user ? (
            <span>
              <a className="nav-link" onClick={signOutHandler}>
                SIGN OUT
              </a>
              <p>{user.displayName}</p>
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <ShoppingCart onClickHandler={cartHandler} />
        </div>
        {cart && <ShoppingCartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
