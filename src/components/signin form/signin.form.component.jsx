import React from "react";
import { useState, useContext } from "react";
import Input from "../input/input.component";
import Button from "../button/button.component";
import "./signin.form.styles.scss";
import {
  signInUserWithGoogleEmailAndPassword,
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";
//import { UserContext } from "../../contexts/user.context";

const formDefault = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [formValues, setFormValues] = useState(formDefault);
  const { email, password } = formValues;

  //const { setUser } = useContext(UserContext);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const { user } = await signInWithGooglePopup();
    //setUser(user);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInUserWithGoogleEmailAndPassword(email, password);
      // setUser(user);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="signin-form-container">
      <h2>Already have an account?</h2>
      <p>Sign in here!</p>
      <form onSubmit={onFormSubmit}>
        <Input
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <Input
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <div className="submit-button-wrapper">
          <Button label="Submit" type="submit" />
          <Button
            label="Google Sign In"
            onClick={signInWithGoogle}
            buttonType="google"
          />
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
