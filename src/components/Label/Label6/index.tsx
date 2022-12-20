import React from "react";

// import stylesheets
import "./label6.scss";

import label from "../../../assets/labels/Label-6.svg";

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

const Label6 = ({
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
            color: "#B19D71",
            fontSize: `14px`,
            position: "relative",
            textAlign: "center",
            marginTop: "45px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "#B19D71",
            fontSize: `6px`,
            position: "relative",
            textAlign: "center",
            marginTop: "6px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#B19D71",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "15px",
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
            color: "#B19D71",
            fontSize: "5px",
            marginTop: "1px",
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
            color: "#B19D71",
            textAlign: "center",
            fontSize: "5px",
            marginTop: "10px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel6 = ({
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
            color: "#B19D71",
            fontSize: `37px`,
            position: "relative",
            textAlign: "center",
            marginTop: "120px",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "#B19D71",
            fontSize: `15px`,
            position: "relative",
            textAlign: "center",
            marginTop: "12px",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#B19D71",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "35px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              textAlign: "center",
              marginRight: "5px",
              fontWeight: "200",
            }}
          >
            {vol}% /vol
          </p>

          <p
            style={{
              fontSize: "13px",
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            {cl} cl
          </p>
        </div>
        <p
          style={{
            color: "#B19D71",
            fontSize: "13px",
            marginTop: "3px",
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
            color: "#B19D71",
            textAlign: "center",
            fontSize: "13px",
            marginTop: "27px",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label6;
