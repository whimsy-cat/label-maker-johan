import React from "react";

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
            color: "white",
            fontSize: `14px`,
            position: "relative",
            textAlign: "center",
            marginTop: "35px",
            marginLeft: "-8px",
            transform: "rotate(-15deg)",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `7px`,
            position: "relative",
            textAlign: "center",
            marginTop: "0px",
            transform: "rotate(-15deg)",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
            marginTop: "3px",
            marginLeft: "5px",
            transform: "rotate(-15deg)",
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
            color: "white",
            fontSize: `37px`,
            position: "relative",
            textAlign: "center",
            marginTop: "90px",
            marginLeft: "-18px",
            transform: "rotate(-15deg)",
          }}
        >
          {bottleName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `17px`,
            position: "relative",
            textAlign: "center",
            marginTop: "0px",
            transform: "rotate(-15deg)",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: "white",
            fontSize: `12px`,
            position: "relative",
            textAlign: "center",
            marginTop: "3px",
            marginLeft: "10px",
            transform: "rotate(-15deg)",
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
