import React from "react";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import Toggle from "../components/Toggle/Toggle";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/users/register", {
        name,
        email,
        password,
        role: "admin",
      });

      alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      navigate("/profile");
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data || "Xatolik yuz berdi");
    }
  };

  return (
    <div className="signup">
      <div className="signup__bg">
        <h1>Welcome!</h1>
        <p>
          Use these awesome forms to login or create new <br /> account in your
          project for free.
        </p>
      </div>
      <form className="signup-form" onSubmit={handleRegister}>
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
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
        <button className="signup__button" type="submit">
          Sign Up
        </button>
        <h2>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </h2>
      </form>
    </div>
  );
};

export default Signup;
