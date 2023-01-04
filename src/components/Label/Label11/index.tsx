import React, { useState, useEffect } from "react";

// import stylesheets
import "./label11.scss";

import label from "../../../assets/labels/Label-11.svg";

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

const Label11 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(10);
  const [tagFontSize, setTagFontSize] = useState(6);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 70 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(10);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 70 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(6);
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
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "68px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bevan",
              marginLeft: "6px",
            }}
          >
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  fontSize: "3px",
                  textAlign: "center",
                  marginRight: "5px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  fontSize: "3px",
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
                fontSize: "3px",
                marginTop: "1px",
                position: "relative",
                fontWeight: "200",
                textAlign: "center",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              color: color,
              fontSize: nameFontSize,
              position: "relative",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "12px",
            }}
          >
            {bottleName}
          </p>
          <p
            style={{
              position: "relative",
              color: "white",
              textAlign: "center",
              fontSize: "5px",
              fontWeight: "200",
              marginRight: "5px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
        <p
          style={{
            color: "white",
            fontSize: tagFontSize,
            position: "relative",
            textAlign: "center",
            marginTop: "12px",
            fontWeight: "200",
          }}
        >
          {tagLine}
        </p>
      </div>
    </div>
  );
};

export const BigLabel11 = ({
  bottleName,
  vol,
  cl,
  tagLine,
  color,
  file,
  batchDate,
  bottleType,
}: LabelProps) => {
  const [nameFontSize, setNameFontSize] = useState(27);
  const [tagFontSize, setTagFontSize] = useState(13);

  useEffect(() => {
    if (bottleName.length >= 8) {
      var t = 180 / (bottleName.length + 1);
      setNameFontSize(t);
    } else {
      setNameFontSize(27);
    }
  }, [bottleName]);
  useEffect(() => {
    if (tagLine.length >= 8) {
      var t = 180 / (tagLine.length + 1);
      setTagFontSize(t);
    } else {
      setTagFontSize(13);
    }
  }, [tagLine]);
  return (
    <div
      className="label"
      style={{
        background: "black",
        height: "380px",
        width: "380px",
        borderRadius: "8px",
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
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Bevan",
            marginTop: "178px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bevan",
              marginLeft: "15px",
            }}
          >
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  fontSize: "7px",
                  textAlign: "center",
                  marginRight: "12px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  fontSize: "7px",
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
                fontSize: "7px",
                marginTop: "2.5px",
                position: "relative",
                fontWeight: "200",
                textAlign: "center",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              color: color,
              fontSize: nameFontSize,
              position: "relative",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "29px",
            }}
          >
            {bottleName}
          </p>
          <p
            style={{
              position: "relative",
              color: "white",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "200",
              marginRight: "15px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>
        <p
          style={{
            color: "white",
            fontSize: tagFontSize,
            position: "relative",
            textAlign: "center",
            marginTop: "30px",
            fontWeight: "200",
          }}
        >
          {tagLine}
        </p>
      </div>
    </div>
  );
};

export default Label11;
