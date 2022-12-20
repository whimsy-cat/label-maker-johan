import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./shippinginfo.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import useStore from "../../useStore";

import img1 from "../../assets/main/shipping.png";

const ShippingInfo = () => {
  const { T, update } = useStore();
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <div className="shippinginfo">
            <h1>{T("shippinginfo.header")}</h1>
            <Row style={{ width: "100%", marginTop: "50px" }}>
              <Col
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                style={{ height: "auto" }}
              >
                <Row>
                  <h2>{T("shippinginfo.quiz1")} </h2>
                </Row>
                <Row>
                  <h3>{T("shippinginfo.answer1")}</h3>
                </Row>
                <Row>
                  <h2>{T("shippinginfo.quiz2")}</h2>
                </Row>
                <Row>
                  <h3>{T("shippinginfo.answer2")}</h3>
                </Row>
                <Row>
                  <h2>{T("shippinginfo.quiz3")}</h2>
                </Row>
                <Row>
                  <h3>{T("shippinginfo.answer3")}</h3>
                </Row>
              </Col>
              <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <Row>
                  <img
                    src={img1}
                    width="300px"
                    height="500px"
                    alt="about1"
                    className="shipping-image"
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

export default ShippingInfo;
