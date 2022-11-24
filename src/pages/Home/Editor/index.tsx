import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker } from "react-color";
import Button from "react-bootstrap/Button";

// import stylesheets
import "./editor.scss";

// import assets
import wine1 from "../../../assets/images/wine1.jpg";
import wine2 from "../../../assets/images/wine2.jpg";
import wine3 from "../../../assets/images/wine3.jpg";
import wine4 from "../../../assets/images/bottles/bot3.png";
import wine5 from "../../../assets/images/wine5.webp";

const Home = () => {
  const [color, setColor] = useState("#fff");
  return (
    <div className="editor">
      <Container className="container">
        <Row>
          <Col className="col-lg-6">
            <h1 className="gradient-h1">Make Wine Label</h1>
            <h2>Create your own wine label</h2>
            <h3>
              Add the details about your beer and a custom label will be created
              for you. Use the arrows beside the bottle to try out different
              designs or browse all our designs.
            </h3>
            <Row style={{ marginTop: "20px" }}>
              <Col className="col-lg-6">
                <h4>Wine name</h4>
                <input type="text" />
              </Col>
              <Col className="col-lg-6">
                <h4>Wine type</h4>
                <input type="text" />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-lg-12">
                <h4>Tag line</h4>
                <input type="text" />
                <input type="text" style={{ marginTop: "5px" }} />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-lg-3">
                <h4>Alc/Vol</h4>
                <input type="text" />
              </Col>
              <Col className="col-lg-3">
                <h4>Volume</h4>
                <input type="text" />
              </Col>
              <Col className="col-lg-6">
                <h4>Color</h4>
                <CirclePicker width="100%" />
              </Col>
            </Row>

            <Row
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col className="col-lg-4">
                <Button variant="danger" style={{ width: "100%" }}>
                  Buy Stickers
                </Button>
              </Col>
              <Col className="col-lg-8" style={{ color: "white" }}>
                or{" "}
                <a
                  href="javascript();"
                  style={{ color: "white", padding: "0 15px" }}
                >
                  Print yourself
                </a>
                /
                <a
                  href="javascript();"
                  style={{ color: "white", padding: "0 15px" }}
                >
                  Download
                </a>
                /
                <a
                  href="javascript();"
                  style={{ color: "white", padding: "0 15px" }}
                >
                  Save
                </a>
              </Col>
            </Row>
          </Col>
          <Col
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={wine4} width={500} height={600} alt="wine bottle" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
