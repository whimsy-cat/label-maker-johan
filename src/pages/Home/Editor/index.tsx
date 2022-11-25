import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker } from "react-color";
import Button from "react-bootstrap/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import stylesheets
import "./editor.scss";

// import assets
import bottle1 from "../../../assets/main/bottle1.webp";

const Home = () => {
  const [color, setColor] = useState("#fff");
  return (
    <div className="editor">
      <h1> LABEL.COM </h1>
      <h2> Create your own label and print with the proffessionals</h2>
      <Container>
        <Row className="edit-box">
          <Col
            className="col-lg-5 col-md-5 col-sm-12"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={bottle1}
              width={260}
              height={650}
              alt="bottle1"
              style={{
                position: "absolute",
                bottom: "-45px",
              }}
            ></img>
          </Col>
          <Col className="col-lg-7 col-md-7 col-sm-12 edit-setting">
            <Row style={{ display: "flex", textAlign: "left" }}>
              <h3>Checkout</h3>
              <h4>Fill in the number of label you wan to order.</h4>
              <h4>Confirm your order and pay it by Paypal.</h4>
            </Row>
            <Row>
              <Col className="col-lg-8">
                <Row className="edit-input">
                  E-mail
                  <input type="text"></input>
                </Row>
              </Col>
              <Col className="col-lg-4">
                <Row className="edit-input">
                  Phone
                  <input type="text"></input>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="col-lg-6">
                <Row className="edit-input">
                  First name
                  <input type="text"></input>
                </Row>
              </Col>
              <Col className="col-lg-6">
                <Row className="edit-input">
                  Last Name
                  <input type="text"></input>
                </Row>
              </Col>
            </Row>
            <Row style={{ width: "100%" }}>
              <Col className="col-lg-12">
                <Row className="edit-input">
                  Address
                  <input type="text"></input>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="col-lg-3">
                <Row className="edit-input">
                  Zipcode
                  <input type="text"></input>
                </Row>
              </Col>
              <Col className="col-lg-9">
                <Row className="edit-input">
                  Region, City
                  <input type="text"></input>
                </Row>
              </Col>
            </Row>
            <Row style={{ width: "100%", marginBottom: "20px" }}>
              <Col className="col-lg-8">
                <Row className="edit-input">
                  Country
                  <input type="text"></input>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="checkout">
          <Col
            className="col-lg-5 col-md-5 col-sm-12"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          ></Col>
          <Col className="col-lg-7 col-md-7 col-sm-12 edit-setting">
            <Row style={{ display: "flex", textAlign: "left" }}>
              <h3>Checkout</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 0",
                  alignItems: "center",
                }}
              >
                <h4>Beer label, custom built</h4>
                <h4>500 a 3 SEK</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 0",
                }}
              >
                <h4>Shipping cost:</h4>
                <h4>29 SEK</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 0",
                  alignItems: "center",
                }}
              >
                <h4>VAT included with: </h4>
                <h4>306 SEK</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 0",
                }}
                className="total"
              >
                <h2>Total</h2>
                <h2>1529 SEK</h2>
              </div>
            </Row>
          </Col>
        </Row>

        <Row className="footer">
          <Col
            className="col-lg-5 col-md-5 col-sm-12"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          ></Col>
          <Col className="col-lg-7 col-md-7 col-sm-12">
            <Row style={{ display: "flex", textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 0",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#ffffff",
                    color: "black",
                    padding: "10px 50px",
                    right: 0,
                    fontSize: "20px",
                    border: "none",
                    boxShadow: "2px 2px 2px #00000090",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  500 labels
                </button>
                <button
                  style={{
                    backgroundColor: "#07ce4f",
                    color: "white",
                    padding: "10px 50px",
                    right: 0,
                    fontSize: "20px",
                    border: "none",
                    boxShadow: "2px 2px 2px #00000090",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Order & Pay
                </button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
