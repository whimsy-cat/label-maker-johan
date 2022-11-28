import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Order from "../pages/Order";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default Routers;
