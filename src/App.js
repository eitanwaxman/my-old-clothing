import "./categories.container.styles.scss";
import Directory from "./routes/directory/directory.component";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/navigation bar/navigation.bar.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign in/sign.in.component";
import CheckOut from "./routes/checkout/checkout.componenet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
