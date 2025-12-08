import React, { useEffect, useState } from "react";
import "./Biling.css";
import Header from "../../pages/Header";
import card from "../../assets/card.png";
import { FaWallet } from "react-icons/fa";
import axios from "axios";

const Biling = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/card/getAll");
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
      await axios.delete(`http://localhost:5000/card/delete/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;
  return (
    <div>
      <Header />
      <div className="biling-container">
        <div className="card-container-biling">
          <div className="img-box">
            <img src={card} alt="" />
          </div>

          <div className="salary">
            <div className="selary-icon">
              <span>
                <FaWallet />
              </span>
            </div>
            <div className="biling-bottoms">
              <h3>Salary</h3>
              <p>Belong Interactive</p>
              <span className="bortder-arrow"></span>
            </div>
            <p>+$2000</p>
          </div>
          <div className="salary">
            <div className="selary-icon">
              <span></span>
            </div>
            <div className="biling-bottoms">
              <h3>Paypal</h3>
              <p>Freelance Payment</p>
              <span className="bortder-arrow"></span>
            </div>
            <p>$455.00</p>
          </div>
        </div>
      </div>

      <div className="biling-information">
        <div className="information-header">
          <div className="information-left">
            <h2>Billing Information</h2>
          </div>
          <div className="information-right">
            <input type="search" placeholder="Type here..." />
          </div>
        </div>

        <div className="user-cards">
          <div className="user-information-left">
            {data.map((item) => (
              <div key={item.id}>
                <h2>{item.user.name}</h2>
                <h2>Card name {item.card_name}</h2>
                <h2>Card number {item.card_number}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biling;
