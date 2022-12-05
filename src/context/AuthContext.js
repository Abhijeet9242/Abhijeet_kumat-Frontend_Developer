import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggeduser, setLoginUser] = useState(null);

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("myloggeduser")));
  }, []);

  const updateLoggedUser = (user) => {
    localStorage.setItem("myloggeduser", JSON.stringify(user));
    setLoginUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ loggeduser, setLoginUser, updateLoggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
