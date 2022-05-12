import { signOut } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import {
  addAuthStateChangeListener,
  signOutWithGoogle,
  createUserDoc,
} from "../utils/firebase/firebase.utils";

const userState = {
  user: null,
  setUser: () => null,
};

export const UserContext = createContext(userState);

export const UserProvider = ({ children }) => {
  //signOutWithGoogle();

  useEffect(() => {
    const unsubscribe = addAuthStateChangeListener((user) => {
      if (user) {
        createUserDoc(user);
      }
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const [user, setUser] = useState(null);
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
