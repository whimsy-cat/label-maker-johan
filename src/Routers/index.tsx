import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import Order from "../pages/Order";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
import BrowseLabels from "../pages/BrowseLabels";
import About from "../pages/About";
import News from "../pages/News";
import ShippingInfo from "../pages/ShippingInfo";
import Review from "../pages/Review";
import Splash from "../pages/Splash";
import Confirmation from "../pages/Confirmation";
import Download from "../pages/Download";

const Routers = () => {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Splash />} />
      <Route path="/edit" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/browse" element={<BrowseLabels />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/shippinginfo" element={<ShippingInfo />} />
      <Route path="/review" element={<Review />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
};

export default Routers;
