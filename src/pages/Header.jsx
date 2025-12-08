import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { IoCube } from "react-icons/io5";
import { NavLink, Route, Router } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <header className="header">
        <span>Billing</span>
        <nav>
          <a href="#">
            <FaUser className="icon user" />
            Profile
          </a>
          <a href="#">
            <IoCube className="icon user" />
            Billing
          </a>
        </nav>
        <div className="right">
          <button>
            <FaUser className="icon user" />
            Sign In
          </button>
          <IoIosSettings className="icon settings" />
          <IoIosNotifications className="icon notification" />
        </div>
      </header>
    </div>
  );
};

export default Header;
