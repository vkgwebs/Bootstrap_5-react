import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(isAuthenticated());
  function isAuthenticated() {
    if (typeof window == "undefined") return false;
    if (localStorage.getItem("jwt")) return true;
    else return false;
  }

  function loginUser(user, setLoading) {
    return new Promise(function (resolve) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("jwt", "xxxxxxxxxxxxxxxxxxx");
        setLoggedIn(true);
        setLoading(false);
        resolve();
      }, 2000);
    });
  }

  function logOut(history) {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/signin");
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
