import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Protected = ({ children }) => {
  const { loggeduser } = useContext(AuthContext);
  if (loggeduser === null) {
    return <Navigate to="/login" replace />;
  }
  if (loggeduser === null) {
    return <Navigate to="/homepage" replace />;
  }
  return children;
};

export default Protected;
