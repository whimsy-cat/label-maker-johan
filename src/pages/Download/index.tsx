import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./download.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import DownloadBox from "./DownloadBox";

const Review = () => {
  return (
    <div className="review">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <TopMenuBar />
          <DownloadBox />
          {/* {status === "Sign In" ? <Login /> : ""} */}
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Review;
