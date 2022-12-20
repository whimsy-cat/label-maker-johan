import React from "react";

// import stylesheets
import "./label9.scss";

import label from "../../../assets/labels/Label-9.svg";

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

const Label9 = ({
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
        background: "black",
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
            color: "white",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
            marginTop: "9px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
            marginTop: "3px",
            fontWeight: "200",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "25px",
            marginLeft: "-60px",
          }}
        >
          <p
            style={{
              fontSize: "4px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "4px",
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
            fontSize: "4px",
            marginTop: "1px",
            position: "relative",
            marginLeft: "-60px",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "white",
            textAlign: "center",
            fontSize: "5px",
            marginTop: "70px",
            fontWeight: "200",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel9 = ({
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
        <p
          style={{
            color: "white",
            fontSize: `27px`,
            position: "relative",
            textAlign: "center",
            marginTop: "19px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `13px`,
            position: "relative",
            textAlign: "center",
            marginTop: "6px",
            fontWeight: "200",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "65px",
            marginLeft: "-160px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "11px",
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
            fontSize: "11px",
            marginTop: "1px",
            marginLeft: "-160px",
            position: "relative",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          {bottleType}
        </p>
        <p
          style={{
            position: "relative",
            color: "white",
            textAlign: "center",
            fontSize: "13px",
            marginTop: "180px",
            fontWeight: "200",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label9;
