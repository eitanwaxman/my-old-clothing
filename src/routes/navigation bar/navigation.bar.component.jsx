import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.bar.styles.scss";
// import { ReactComponent as Logo } from "../../assets/logo.png"; ONLY SVG

const NavBar = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
