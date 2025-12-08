import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Signup from "./pages/Signup";
import ProductForm from "./components/AddForm/AddForm";
import Header from "./pages/Header";
import Login from './pages/Login'
import Biling from "./components/Biling/Biling";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/biling" element={<Biling />}/>
        <Route path="/add" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm />} />
      </Routes>
    </div>
  );
};

export default App;
