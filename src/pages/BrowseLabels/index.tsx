import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./browselabels.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import Labels from "./Labels";
import { Helmet } from "react-helmet";

const BrowseLabels = () => {
  return (
    <>
      <Helmet>
        <title>Design your stylish labels your home-brewed beer or wine.</title>
        <meta
          name="description"
          content="If you make juice, beer, schnapps or wine yourself, you can give the bottles a nice look by putting your own labels on the bottles."
        />
        <meta
          name="keywords"
          content="beer label, wine label, cider label, jam label, create your own, order labels online, home brewer, label your beer batches, stickers, label, decal, wine labels, jam labels, word template, free shipping, brewed beer, custom labels"
        />
      </Helmet>

      <div className="browselabels">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <Labels />
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default BrowseLabels;
