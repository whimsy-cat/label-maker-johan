import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./payment.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import PayBox from "./PayBox";
import { Helmet } from "react-helmet";

const Order = () => {
  return (
    <>
      <Helmet>
        <title>Design your stylish labels for your home-brewed beer</title>
        <meta
          name="description"
          content="If you make juice, beer, schnapps or wine yourself, you can give the bottles a nice look by putting your own labels on the bottles."
        />
        <meta
          name="keywords"
          content="beer label, wine label, cider label, jam label, create your own, order labels online, home brewer, label your beer batches, stickers, label, decal, wine labels, jam labels, word template, free shipping, brewed beer, custom labels"
        />
      </Helmet>
      <div className="payment">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <PayBox />
            {/* {status === "Sign In" ? <Login /> : ""} */}
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Order;
