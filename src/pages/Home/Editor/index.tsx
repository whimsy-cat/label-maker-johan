import React, { useState, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker } from "react-color";
import Button from "react-bootstrap/Button";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// import stylesheets
import "./editor.scss";

// import assets
import bottle1 from "../../../assets/main/bottle1.webp";
import wine1 from "../../../assets/images/wine1.jpg";
import wine2 from "../../../assets/images/wine2.jpg";
import wine3 from "../../../assets/images/wine3.jpg";
import wine4 from "../../../assets/images/bottles/bot3.png";
import wine5 from "../../../assets/images/wine5.webp";

// import labels
import Label from "../../../components/Label";

const Home = () => {
  const [color, setColor] = useState("#000000");
  const [wineName, setWineName] = useState("WineName");
  const [vol, setVol] = useState("4.8");
  const [cl, setCl] = useState("33");
  const [tagLine, setTagLine] = useState("TagLine");
  const printRef = React.useRef<HTMLDivElement>(null);

  const updateWineName = (event: any) => {
    const text = event.target.value;
    if (text.length > 22) return;
    setWineName(text);
  };

  const updateVol = (event: any) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      const text = event.target.value;
      setVol(text);
    }
  };

  const updateCl = (event: any) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      const text = event.target.value;
      setCl(text);
    }
  };

  const updateTagLine = (event: any) => {
    const text = event.target.value;
    setTagLine(text);
  };

  const onColorChange = (color: any, event: any) => {
    const text = color.hex;
    setColor(text);
  };

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "px", "a7");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("label.pdf");
  };

  return (
    <div className="editor">
      <Container className="container">
        <Row>
          <Col
            className="col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
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
                <input type="text" onChange={updateWineName} />
              </Col>
              <Col className="col-lg-6">
                <h4>Wine type</h4>
                <input type="text" />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-lg-12">
                <h4>Tag line</h4>
                <input type="text" onChange={updateTagLine} />
                <input type="text" style={{ marginTop: "5px" }} />
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col className="col-lg-3">
                <h4>Alc/Vol</h4>
                <input type="text" value={vol} onChange={updateVol} />
              </Col>
              <Col className="col-lg-3">
                <h4>Volume</h4>
                <input type="text" value={cl} onChange={updateCl} />
              </Col>
              <Col className="col-lg-6">
                <h4>Color</h4>
                <CirclePicker width="100%" onChange={onColorChange} />
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
                or
                <a
                  href="#download"
                  style={{ color: "white", padding: "0 15px" }}
                  onClick={handleDownloadPdf}
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
            <div className="bottle" style={{ width: "180px", height: "100%" }}>
              <div style={{ width: "100%", height: "55%" }}></div>
              <div ref={printRef} className="overlay">
                <Label
                  wineName={wineName}
                  vol={vol}
                  cl={cl}
                  tagLine={tagLine}
                  color={color}
                />
              </div>
              {/* <div className="overlay"></div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
