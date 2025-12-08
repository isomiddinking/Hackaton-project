import React, { useEffect, useState } from "react";
import { FaUser, FaWrench } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { IoCube, IoDocuments } from "react-icons/io5";
import "./profile.css";
import { MdEdit } from "react-icons/md";
import Projects from "../components/Projects/Projects";
import { Link } from "react-router-dom";
const Profile = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="profile">
      <header className="profile-header">
        <span>Profile</span>
        <nav>
          <a href="#">
            <FaUser className="icon user" />
            Profile
          </a>
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
      <div className="profile-bio">
        <div className="profile-img">
          <img src="/src/assets/profile-img.png" alt="profile-img" />
          <MdEdit className="icon edit" />
        </div>
        <div className="profile-bio__data">
          <h2>Esthera Jackson</h2>
          <span>esthera@simmmple.com</span>
        </div>
        <div className="profile-bio__btns">
          <button>
            <IoCube className="icon overview" />
            OVERVIEW
          </button>
          <button>
            <IoDocuments className="icon teams" />
            TEAMS
          </button>
          <button>
            <FaWrench className="icon projects" />
            PROJECTS
          </button>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Profile;