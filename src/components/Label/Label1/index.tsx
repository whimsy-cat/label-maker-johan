import React, { useEffect, useState } from "react";

// import stylesheets
import "./label1.scss";

import label from "../../../assets/labels/Label-1.svg";

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

const Label1 = ({
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
  const [tagFontSize, setTagFontSize] = useState(9);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 130 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(14);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 130 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(9);
    }
  }, [tagFontSize]);

  useEffect(() => {}, [bottleName]);
  return (
    <div
      className="label"
      style={{
        background: "white",
        borderRadius: "30px",
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
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: "white",
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "7px",
            height: "16px",
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
            marginTop: "2px",
            fontWeight: "900",
            height: "10px",
          }}
        >
          {tagLine}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "80px",
          }}
        >
          <p
            style={{
              fontSize: `5px`,
              textAlign: "center",
              marginRight: "5px",

              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `5px`,
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
            height: "7px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "6px",
            marginTop: "5px",
            color: "white",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel1 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(30);
  const [tagFontSize, setTagFontSize] = useState(19);

  useEffect(() => {
    if (bottleName.length >= 10) {
      var t = 330 / (tagLine.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(30);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 10) {
      var t = 330 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(19);
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
      <div className="label-text" style={{ width: "380px", height: "380px" }}>
        <p
          style={{
            color: "white",
            fontSize: nameFontSize,
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            height: "30px",
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
            marginTop: "15px",
            fontWeight: "900",
            height: "23px",
          }}
        >
          {tagLine}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "200px",
          }}
        >
          <p
            style={{
              fontSize: `10px`,
              textAlign: "center",
              marginRight: "5px",

              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: `10px`,
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "white",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
            marginTop: "5px",
            height: "12px",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            textAlign: "center",
            fontSize: "10px",
            marginTop: "15px",
            color: "white",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label1;
