import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { updateLoggedUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (email !== "" && password !== "") {
      axios.post("https://spacex-backend.onrender.com/login", user).then((res) => {
        setError(res.data.message);

        if (res.data.user === undefined) {
          navigate("/login");
        } else {
          updateLoggedUser(res.data.user);
          navigate("/homepage");
        }
      });
    } else {
      setError("Invalid Credientials");
    }
  };

  return (
    <>
      <Header />

      <div className="register-main">
        <section className="login">
          <h1 style={{ color: "white", textAlign: "center" }}>LOGIN</h1>
          <div className="showcase-overlay">
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Enter Your email address"
                value={user.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter Your password"
              />
              <button onClick={handleLogin}>Log In</button>
            </div>
          </div>
          <p style={{ color: "white", textAlign: "center" }}>{error}</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;
