import React, { useState } from "react";

// import stylesheets
import "./orderbox.scss";

// import antd
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const OrderBox = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue: any) => {
    setInputValue(newValue);
  };
  return (
    <div className="orderbox">
      <div>
        <h1>Fix a Label</h1>
        <p>Order &gt; Shipping &gt; Payment &gt; Review</p>
      </div>
      <div>
        <h2>Order your beer sticker</h2>

        <p>
          Your custom label design will be printed out as high quality
          waterproof stickers cut to shape and shipped to you promptly, so you
          can make your brew look fantastic
        </p>
      </div>
      <div>
        <h3>Paper Type</h3>
        <select
          style={{ width: "50%", padding: "5px 10px", borderRadius: "5px" }}
        >
          <optgroup>
            <option value="profile">Glossy paper </option>
            <option value="profile">Glossy paper </option>
            <option value="profile">Glossy paper </option>
            <option value="profile">Glossy paper </option>
            <option value="profile">Glossy paper </option>
          </optgroup>
        </select>
      </div>
      <div>
        <h3>Number of labels</h3>
        <select
          style={{ width: "50%", padding: "5px 10px", borderRadius: "5px" }}
        >
          <optgroup>
            <option value="profile">12 labels ($14) </option>
            <option value="profile">24 labels ($18) </option>
            <option value="profile">36 labels ($22) </option>
            <option value="profile">48 labels ($28) </option>
            <option value="profile">72 labels ($38) </option>
            <option value="profile">120 labels ($56) </option>
            <option value="profile">200 labels ($86) </option>
            <option value="profile">500 labels ($170) </option>
          </optgroup>
        </select>
      </div>
      <div style={{ width: "50%" }}>
        <h3>Size</h3>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
        />
      </div>
      <div className="order-buttons">
        <button
          style={{
            backgroundColor: "#ffc404",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            marginRight: "20px",
          }}
        >
          Next
        </button>
        <span>or</span>
        <button
          style={{
            background: "transparent",
            marginLeft: "10px",
            borderBottom: "1px solid white",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            color: "white",
            paddingBottom: "0px",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default OrderBox;
