import React, { useEffect } from "react";

// import stylesheets
import "./label13.scss";

import label from "../../../assets/labels/Label-13.svg";

import Draggable from "react-draggable";
interface LabelProps {
  bottleName: string;
  vol: string;
  cl: string;
  tagLine: string;
  color: string;
  batchDate: string;
  bottleType: string;
  file?: string;
}

const Label13 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  return (
    <div
      className="label"
      style={{
        background: "white",
        height: "150px",
        width: "150px",
      }}
    >
      <img
        src={label}
        width={146}
        height={146}
        alt="upload"
        style={{ margin: "2px 0px 2px 2px", maxWidth: "100%" }}
      />

      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: "#BF6500",
            fontSize: `6px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "10px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: `15px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "45px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            fontSize: `5px`,
            position: "relative",
            fontFamily: "Bevan",
            marginTop: "0px",
            color: "#BF6500",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <div
          style={{
            color: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "30px",
          }}
        >
          <p
            style={{
              fontFamily: "Bevan",
              fontSize: `5px`,
              textAlign: "center",
              marginRight: "5px",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `5px`,
              fontFamily: "Bevan",
              textAlign: "center",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "5px",
            fontFamily: "Bevan",
            marginTop: "2px",
            color: "black",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel13 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  useEffect(() => {}, []);
  return (
    <div
      className="label"
      style={{
        height: "380px",
        width: "380px",
      }}
    >
      <img
        src={label}
        width={376}
        height={376}
        alt="upload"
        style={{ margin: "2px 0px 2px 0px", maxWidth: "100%" }}
      />
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
      <p
          style={{
            color: "#BF6500",
            fontSize: `15px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "27px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: `40px`,
            position: "relative",
            textAlign: "center",
            fontFamily: "Bevan",
            marginTop: "110px",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            fontSize: `13px`,
            position: "relative",
            fontFamily: "Bevan",
            marginTop: "0px",
            color: "#BF6500",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <div
          style={{
            color: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "76px",
          }}
        >
          <p
            style={{
              fontFamily: "Bevan",
              fontSize: `13px`,
              textAlign: "center",
              marginRight: "5px",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `13px`,
              fontFamily: "Bevan",
              textAlign: "center",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "13px",
            fontFamily: "Bevan",
            marginTop: "5px",
            color: "black",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label13;
