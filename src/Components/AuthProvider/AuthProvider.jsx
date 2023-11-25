import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../FirebaseConfig/FirebaseConfig";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  //User Registations
  const handleRegistation = async ({ email, password }) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  //Update User
  const handleUpdateUser = async (name, photoUrl) => {
    setLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  //Login User
  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };
  //Sign Out
  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Google Login
  const handleGLogin = async () => {
    setLoading(true);
    return await signInWithPopup(auth, provider);
  };
  //Auth State Changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        const email = currentUser?.email || user?.email;
        const loggedInUser = { email };
        if (currentUser) {
          setUser(currentUser);
          //
          if (currentUser) {
            axios
              .post(
                "https://job-search-plum.vercel.app/secure/api",
                loggedInUser,
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                setLoading(false);
                console.log(res);
              })
              .catch((err) => console.log(err));
          }
        } else {
          axios
            .post(
              "https://job-search-plum.vercel.app/secure/api/logout",
              loggedInUser,
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              console.log(res.data);
              setLoading(false);
            })
            .catch((err) => console.log(err));
          setUser(null);
        }
        return () => unSubscribe();
      },
      []
    );
  });

  //Pass Provider Value Of Object
  const authInfo = {
    user,
    loading,
    handleRegistation,
    handleUpdateUser,
    handleLogin,
    handleGLogin,
    handleLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
