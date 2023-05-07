import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/services" element={<Services></Services>} />
        <Route exact path="/products" element={<Products></Products>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
