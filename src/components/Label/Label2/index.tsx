import React, { useState, useEffect } from "react";

// import stylesheets
import "./label2.scss";

import label from "../../../assets/labels/Label-2.svg";

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

const Label2 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(14);
  const [tagFontSize, setTagFontSize] = useState(7);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 120 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 120 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(7);
    }
  }, [tagLine]);

  return (
    <div
      className="label"
      style={{
        height: "150px",
        width: "150px",
      }}
    >
      <img
        src={label}
        width={146}
        height={146}
        alt="upload"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div
        className="label-text"
        style={{ width: "150px", height: "150px", fontFamily: "Bevan" }}
      >
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "35px",
            marginLeft: "0px",
            transform: "rotate(-15deg)",
            height: "17px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
            marginLeft: "2px",
            transform: "rotate(-15deg)",
            height: "8px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize * 0.5,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1px",
            marginLeft: "7px",
            transform: "rotate(-15deg)",
            height: "8px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#432222",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "40px",
            marginLeft: "-50px",
          }}
        >
          <p
            style={{
              fontSize: "5px",

              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "5px",

              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "#432222",
            fontSize: "5px",
            marginTop: "1px",
            position: "relative",
            marginLeft: "-50px",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "#432222",
            marginLeft: "-50px",
            textAlign: "center",
            fontSize: "5px",
            marginTop: "2px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel2 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(35);
  const [tagFontSize, setTagFontSize] = useState(17.5);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 303 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(35);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 303 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(17.5);
    }
  }, [tagLine]);

  return (
    <div
      className="label"
      style={{
        background: "white",
        height: "380px",
        width: "380px",
        borderRadius: "80px",
      }}
    >
      <img
        src={label}
        width={376}
        height={376}
        alt="upload"
        style={{ margin: "2px auto", maxWidth: "100%" }}
      />
      <div
        className="label-text"
        style={{ width: "380px", height: "380px", fontFamily: "Bevan" }}
      >
        <p
          style={{
            color: color,
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "90px",
            transform: "rotate(-15deg)",
            height: "42px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5px",
            marginTop: "0px",
            transform: "rotate(-15deg)",
            height: "20px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: tagFontSize * 0.5,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3px",
            marginLeft: "18px",
            transform: "rotate(-15deg)",
            height: "23px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#432222",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "113px",
            marginLeft: "-120px",
          }}
        >
          <p
            style={{
              fontSize: "12.7px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "12.7px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "#432222",
            fontSize: "12.7px",
            marginTop: "1px",
            position: "relative",
            marginLeft: "-120px",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            fontSize: "12.7px",
            color: "#432222",
            marginLeft: "-120px",
            textAlign: "center",
            fontWeight: "200",
            marginTop: "2px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label2;
