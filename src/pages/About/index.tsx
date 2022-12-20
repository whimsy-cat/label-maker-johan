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

const About = () => {
  const { T, update } = useStore();
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <div className="about">
            <h1>{T("about.header")}</h1>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col
                className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"
                style={{ height: "auto" }}
              >
                <Row>
                  <span className="h2">{T("about.header2")}</span>
                </Row>
                <Row>
                  <span className="h3">{T("about.content")}</span>
                </Row>
              </Col>
              <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <Row>
                  <img
                    src={img1}
                    width="250px"
                    height="350px"
                    alt="about1"
                  ></img>
                </Row>
                <Row></Row>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default About;
