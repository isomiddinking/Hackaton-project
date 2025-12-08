import React from "react";
import "./login.css";
import chakr from "../assets/chakr.png";
import Toggle from "../components/Toggle/Toggle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });

      alert(`Muvaffaqiyatli login! sizning rolingiz ${res.data.user.role}`);
      navigate("/profile");
      console.log(res.data);

      localStorage.setItem("token", res.data.token);
    } catch (error) {
      alert(error.response?.data || "Xatolik yuz berdi");
    }
  };
  return (
    <div className="login__container">
      <div className="login__content">
        <div className="login_box">
          <h1>Welcome Back</h1>
          <p>Enter your email and password to sign in</p>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-boxes">
              <div className="form-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-toggle">
                <Toggle />
                <span>Remember me</span>
              </div>
            </div>
            <button className="signup__button">Sign In</button>
          </form>
        </div>

        <div className="oxirgi-p">
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="link-a">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="login__img">
        <img src={chakr} alt="" />
      </div>
    </div>
  );
};

export default Login;
