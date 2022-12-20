import React from "react";

// import stylesheets
import "./label16.scss";

import label from "../../../assets/labels/Label-16.svg";
import { borderColor } from "@mui/system";

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

const Label16 = ({
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
      <div className="label-text" style={{ width: "150px", height: "150px" }}>
        <p
          style={{
            color: "#EB696F",
            fontSize: `14px`,
            position: "relative",
            textAlign: "center",
            marginTop: "18px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: `18px`,
            position: "relative",
            textAlign: "center",
            marginTop: "38px",
            fontFamily: "La Belle Aurore",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            marginTop: "25px",
            color: "#EB696F",
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
            color: "#EB696F",
            fontSize: `5px`,
            position: "relative",
            textAlign: "center",
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
            color: "#EB696F",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export const BigLabel16 = ({
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
        background: "#EB696F",
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
            color: "#EB696F",
            fontSize: `30px`,
            position: "relative",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          {tagLine}
        </p>
        <p
          style={{
            color: color,
            fontSize: `46px`,
            position: "relative",
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "La Belle Aurore",
            fontWeight: "900",
          }}
        >
          {bottleName}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Bevan",
            color: "#EB696F",
            marginTop: "75px",
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
            color: "#EB696F",
            fontSize: `10px`,
            position: "relative",
            textAlign: "center",
            marginTop: "5px",
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
            color: "#EB696F",
          }}
        >
          {batchDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Label16;
