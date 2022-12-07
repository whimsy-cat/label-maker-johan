import React from "react";

// import stylesheets
import "./home.scss";

// import sub components
import Sidebar from "../../components/Sidebar";
import Editor from "./Editor";

// import signin modal
import Login from "../Auth";

interface HomeProps {
  status: String;
}

const Home = ({ status }: HomeProps) => {
  return (
    <>
      <div className="back">
        <Sidebar />
        <Editor />
        {status === "Sign In" ? <Login /> : ""}
      </div>
    </>
  );
};

export default Home;
