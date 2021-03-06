import React from "react";
import { useState, useContext } from "react";
import Input from "../input/input.component";
import Button from "../button/button.component";
//import { UserContext } from "../../contexts/user.context";
import "./signup.form.styles.scss";
import {
  createUserWithGoogleEmailAndPassword,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";

const formDefault = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  //const { setUser } = useContext(UserContext);

  const [formValues, setFormValues] = useState(formDefault);
  const { displayName, email, password, confirmPassword } = formValues;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (password == confirmPassword) {
      try {
        const response = await createUserWithGoogleEmailAndPassword(
          email,
          password
        );
        const user = {
          uid: response.user.uid,
          displayName: displayName,
          email: email,
        };
        createUserDoc(user);
        //setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      console.log("passwords don't match");
    }
  };

  return (
    <div className="signup-form-container">
      <h2>New here?</h2>
      <p>Sign up with your email address</p>
      <form onSubmit={onFormSubmit}>
        <Input
          label="Display Name"
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

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

        <Input
          label="Confirm Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
