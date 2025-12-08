import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { IoCube } from "react-icons/io5";
import { Link, NavLink, Route, Router } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <header className="header">
        <span>Billing</span>
        <nav>
          <Link to={'/profile'}>
            <FaUser className="icon user" />
            Profile
          </Link>
          <Link to={'/biling'}>
            <IoCube className="icon user" />
            Billing
          </Link>
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
