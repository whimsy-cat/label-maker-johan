import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./about.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

import img1 from "../../assets/main/about-1.png";
import useStore from "../../useStore";

import { Helmet } from "react-helmet";

const About = () => {
  const { T, update } = useStore();
  return (
    <>
      <Helmet>
        <title>
          Labels with printing. Design your own beer or wine labels.
        </title>
        <meta
          name="description"
          content="Create personalized beer labels for you or your company; for parties, weddings and more! Do you need stylish, self-designed brand with your own message. Our custom beer or wine labels are durable and waterproof."
        />
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
            <div className="about">
              <h1>{T("about.header")}</h1>
              <Row className="about-row">
                <Col className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                  <Row>
                    <h2>{T("about.header2")}</h2>
                  </Row>
                  <Row>
                    <h2>{T("about.content")}</h2>
                  </Row>
                </Col>
                <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                  <Row>
                    <img
                      src={img1}
                      width="250px"
                      height="350px"
                      alt="about label"
                    ></img>
                  </Row>
                  <Row></Row>
                </Col>
              </Row>
            </div>
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default About;
