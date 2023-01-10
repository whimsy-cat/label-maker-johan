import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./404.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

import img1 from "../../assets/main/about-1.png";
import useStore from "../../useStore";

import { Helmet } from "react-helmet";

const Error404 = () => {
  const { T, update } = useStore();
  return (
    <>
      <Helmet>
        <title>Page Not Found : Fixalabel</title>
        <meta name="description" content="Page Not Found" />
        <meta
          name="keywords"
          content="beer label, wine label, cider label, jam label, create your own, order labels online, home brewer, label your beer batches, stickers, label, decal, wine labels, jam labels, word template, free shipping, brewed beer, custom labels"
        />
      </Helmet>
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <div className="error">
              <h1>404</h1>
              <h2>{T("error.404")}</h2>
            </div>
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Error404;
