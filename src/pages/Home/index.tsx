import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./home.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import Editor from "./Editor";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Create your own labels, quickly and cheaply</title>
        <meta
          name="description"
          content="Create your own labels quickly and easily with Fixalabel.com. Design your own stylish labels for your juice bottles, your own cider or your home-brewed beer."
        />
        <meta
          name="keywords"
          content="beer label, wine label, cider label, jam label, create your own, order labels online, home brewer, label your beer batches, stickers, label, decal, wine labels, jam labels, word template, free shipping, brewed beer, custom labels"
        />
      </Helmet>
      <div className="home">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <Editor />
            {/* {status === "Sign In" ? <Login /> : ""} */}
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Home;
