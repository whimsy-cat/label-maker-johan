import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CirclePicker, SliderPicker } from "react-color";

import Button from "@mui/material/Button";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// import stylesheets
import "./editor.scss";

// import labels
import Label from "../../../components/Label";

// import images
import Img from "../../../assets/images/bg2.jpg";
import { Slider } from "@mui/material";

const Home = () => {
  const [color, setColor] = useState("#000000");
  const [wineName, setWineName] = useState("WineName");
  const [vol, setVol] = useState("4.8");
  const [cl, setCl] = useState("33");
  const [tagLine, setTagLine] = useState("TagLine");
  const printRef = React.useRef<HTMLDivElement>(null);

  const [file, setFile] = useState(Img);

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

  const handleChange = (e: any) => {
    const imageUrl: any = URL.createObjectURL(e.target.files[0]);
    setFile(imageUrl);
  };

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "px", "a7");
    const imgProperties = pdf.getImageProperties(data);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("label.pdf");
  };

  return (
    <div className="editor">
      <Container className="container">
        <Row>
          <Col
            className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"
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
                {/* <SliderPicker color={color} onChange={onColorChange} /> */}
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
                <button
                  style={{
                    width: "100%",
                    padding: "10px 20px",
                    color: "white",
                    backgroundColor: "#ff3333",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Buy Stickers
                </button>
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
            className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="bottle">
              <div style={{ width: "100%", height: "55%" }}></div>
              <div ref={printRef}>
                <Label
                  wineName={wineName}
                  vol={vol}
                  cl={cl}
                  tagLine={tagLine}
                  color={color}
                  file={file}
                />
              </div>
              <div className="overlay"></div>
            </div>
            <Button
              variant="contained"
              component="label"
              style={{ backgroundColor: "#ff3333" }}
            >
              Upload Image
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleChange}
              />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;