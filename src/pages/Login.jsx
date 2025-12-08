import React from "react";
import "./login.css";
import chakr from "../assets/chakr.png";
import Toggle from "../components/Toggle/Toggle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__content">
        <div className="login_box">
          <h1>Welcome Back</h1>
          <p>Enter your email and password to sign in</p>
          <form className="login-form">
            <div className="form-boxes">
              <div className="form-box">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Your email address" />
              </div>
              <div className="form-box">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Your password" />
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
          <p>Don't have an account? <a href="/register" className="link-a">Sign up</a></p>
        </div>
      </div>
      <div className="login__img">
        <img src={chakr} alt="" />
      </div>
    </div>
  );
};

export default Login;
