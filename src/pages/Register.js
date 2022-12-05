import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginandRegister.css";

const Register = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //Send data to mongodb using POST request
  const handleRegister = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("https://spacex-backend.onrender.com/register", user).then((res) => {
        setError(res.data.message);

        if (res.data.user === undefined) {
          navigate("/register");
        } else {
          navigate("/login");
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
          <h1 style={{ color: "white", textAlign: "center" }}>REGISTER</h1>
          <div className="showcase-overlay">
            <div className="form-control">
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Your Name"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Your email address"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Choose your password"
                onChange={handleChange}
              />
              <input
                type="password"
                name="reEnterPassword"
                value={user.reEnterPassword}
                placeholder="Re-enter your password"
                onChange={handleChange}
              />

              <button onClick={handleRegister}>Create Your Account</button>
            </div>
          </div>
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Register;
