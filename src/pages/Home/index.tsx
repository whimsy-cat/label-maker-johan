import React from "react";

// import stylesheets
import "./home.scss";

// import sub components
import Sidebar from "./Sidebar";
import Editor from "./Editor";
const Home = () => {
  return (
    <>
      <div className="bg">
        <Sidebar />
        <Editor />
      </div>
    </>
  );
};

export default Home;
