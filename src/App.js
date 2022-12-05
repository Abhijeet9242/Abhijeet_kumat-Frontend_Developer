import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Protected from "./utils/Protected";
import HomePage from "./pages/HomePage";
import Single from "./pages/Single";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/homepage"
          element={
            <Protected>
              <HomePage />
            </Protected>
          }
        />
        <Route
          path="/single"
          element={
            <Protected>
              <Single />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
