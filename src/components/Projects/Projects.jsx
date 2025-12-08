import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import { Link } from "react-router-dom";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/projects/getAll");
      setData(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/projects/delete${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <div className="container">
      <h2>Projects</h2>
      <p>Architects design houses</p>
      <div className="card_container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <p>{item.subtitle}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="card-bottom">
                <button>VIEW ALL</button>
                <img src="/src/assets/users-img.png" alt="users-img" />
              </div>
            </div>
          </div>
        ))}
        <Link to={"/add"} className="AddBtn">
          <BiPlus className="icon" />
          Create a new project
        </Link>
      </div>
    </div>
  );
};

export default Projects;
