import React from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import toggleSwitch from "./../components/ToggleSwitch/toggleSwitch";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__bg">
        <img src="/src/assets/signup-bg.png" alt="signup-bg" />
        <h1>Welcome!</h1>
        <p>
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </div>
      <form className="signup-form">
        <div className="reg-options">
          <h2 className="reg-options__title">Register with</h2>
          <div className="reg-boxes">
            <div className="reg-box">
              <FaFacebook className="icon facebook" />
            </div>
            <div className="reg-box">
              <FaApple className="icon apple" />
            </div>
            <div className="reg-box">
              <FaGoogle className="icon google" />
            </div>
          </div>
        </div>
        <span className="reg-span">or</span>
        <div className="form-boxes">
          <div className="form-box">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your full name" />
          </div>
          <div className="form-box">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Your email address" />
          </div>
          <div className="form-box">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Your password" />
          </div>
          <div className="form-box">
            <toggleSwitch />
            <span>Remember me</span>
          </div>
        </div>
        <button>Sign Up</button>
        <h2>
          Already have an account? <span>Sign in</span>
        </h2>
      </form>
    </div>
  );
};

export default Signup;
