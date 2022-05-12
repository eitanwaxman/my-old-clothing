import SignupForm from "../../components/signup form/signup.form.component.jsx";
import SigninForm from "../../components/signin form/signin.form.component.jsx";
import "./sign.in.component.styles.scss";
import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  return (
    <div className="sign-in-wrapper">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default SignIn;
