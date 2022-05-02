import SignupForm from "../../components/signup form/signup.form.component.jsx";
import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDoc(user);
  };

  return (
    <div>
      Sign in page
      <button onClick={signInWithGoogle}> Sign in with google</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
