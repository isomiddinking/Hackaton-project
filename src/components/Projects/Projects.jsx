import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import Header from "../../pages/Header";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/products`);
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <div className="container">
      <Header/>
      <Link to={"/add"} className="AddBtn">
        Qo'shish
      </Link>
      <div className="card_container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.images } alt={item.name} />
            <p>{item.title}</p> 
            <h2>{item.category}</h2>
            <p>{item.description}</p>
            <div className="card_buttons">
              <Link to={`/edit/${item.id}`} className="editBtn">
                <BiEdit />
              </Link>
              <BiTrash
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
