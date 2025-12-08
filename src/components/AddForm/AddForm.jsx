import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddForm.css";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const ProductForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`https://dummyjson.com/products`);
          setName(res.data.name);
          setDescription(res.data.description);
          setImageUrl(res.data.image);
          setSubtitle(res.data.subtitle);
        } catch (err) {
          console.error(err);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await axios.put(`https://dummyjson.com/products`, {
          name,
          description,
          image: imageUrl,
          subtitle,
        });
      } else {
        await axios.post(`https://dummyjson.com/products`, {
          name,
          description,
          image: imageUrl,
        });
      }
      setName("");
      setDescription("");
      setImageUrl("");
      setSubtitle("");
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="rasm url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit" className="add">
          {id ? "Yangilash" : "Qo'shish"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
