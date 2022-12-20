import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./news.scss";
import useStore from "../../useStore";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

const News = () => {
  const { T, update } = useStore();
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <div className="news">
            <h1>{T("news.header")}</h1>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col className="col-6" style={{ height: "auto" }}>
                <div
                  style={{
                    backgroundColor: "#55555530",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </Col>
              <Col className="col-6">
                <Row>
                  <h2>{T("news.news1")}</h2>
                </Row>
                <Row>
                  <h3>{T("news.content1")}</h3>
                </Row>
              </Col>
            </Row>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col className="col-6">
                <Row>
                  <h2>{T("news.news2")}</h2>
                </Row>
                <Row>
                  <h3>{T("news.content2")}</h3>
                </Row>
              </Col>
              <Col className="col-6" style={{ height: "auto" }}>
                <div
                  style={{
                    backgroundColor: "#55555530",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </Col>
            </Row>
            <Row style={{ width: "100%", marginBottom: "50px" }}>
              <Col className="col-6" style={{ height: "auto" }}>
                <div
                  style={{
                    backgroundColor: "#55555530",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              </Col>
              <Col className="col-6">
                <Row>
                  <h2>{T("news.news3")}</h2>
                </Row>
                <Row>
                  <h3>{T("news.content3")}</h3>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default News;
