import React from "react";

// import stylesheets
import "./label23.scss";

import label from "../../../assets/labels/Label-23.svg";

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

const Label23 = ({
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
            color: "#FFFFFF",
            fontSize: `13px`,
            position: "relative",
            marginTop: "35px",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: "Bevan",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4px",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  marginRight: "5px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200",
                }}
              >
                {cl} cl
              </p>
            </div>
            <p
              style={{
                color: "#FFFFFF",
                position: "relative",
                textAlign: "center",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: "5px",
              marginTop: "2px",
              marginRight: "18px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>

        <p
          style={{
            color: "#FE2F2F",
            fontSize: `20px`,
            position: "relative",
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          {bottleName}
        </p>
      </div>
    </div>
  );
};

export const BigLabel23 = ({
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
            color: "#FFFFFF",
            fontSize: `33px`,
            position: "relative",
            marginTop: "90px",
            fontWeight: "200",
            marginLeft: "10px",
            textAlign: "center",
          }}
        >
          {tagLine}
        </p>
        <div
          style={{
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: "Bevan",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Bevan",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  marginRight: "5px",
                  fontWeight: "200",
                }}
              >
                {vol}% /vol
              </p>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "200",
                }}
              >
                {cl} cl
              </p>
            </div>
            <p
              style={{
                color: "#FFFFFF",
                fontWeight: "200",
                position: "relative",
                textAlign: "center",
              }}
            >
              {bottleType}
            </p>
          </div>
          <p
            style={{
              position: "relative",
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: "10px",
              marginTop: "2px",
              marginRight: "18px",
            }}
          >
            {batchDate}{" "}
          </p>
        </div>

        <p
          style={{
            color: "#FE2F2F",
            fontSize: `51px`,
            marginLeft: "10px",
            position: "relative",
            textAlign: "center",
            marginTop: "55px",
          }}
        >
          {bottleName}
        </p>
      </div>
    </div>
  );
};

export default Label23;
