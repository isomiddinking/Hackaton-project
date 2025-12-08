import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Signup from "./pages/Signup";
import ProductForm from "./components/AddForm/AddForm";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Profile />
      {/* <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<Projects />}/>
        <Route path="/add" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm />} />
      </Routes> */}
    </div>
  );
};

export default App;
