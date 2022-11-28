import React, { useEffect, useState } from "react";

// import stylesheets
import "./label.scss";

interface LabelProps {
  wineName: string;
  vol: string;
  cl: string;
  tagLine: string;
  color: string;
  file: string;
}

const Label = ({ wineName, vol, cl, tagLine, color, file }: LabelProps) => {
  const [fontHeaderSize, setFontHeaderSize] = useState(15);

  useEffect(() => {
    if (wineName.length > 0 && wineName.length <= 14) setFontHeaderSize(15);
    else if (wineName.length > 14 && wineName.length <= 18)
      setFontHeaderSize(12);
    else if (wineName.length > 18) setFontHeaderSize(10);
  }, [wineName]);

  return (
    <div className="label">
      <img src={file} height={150} alt="upload" />
      <div className="label-text">
        <div style={{ color: color, fontSize: `${fontHeaderSize}px` }}>
          {wineName}
        </div>
        <div className="label-text-tagline">{tagLine}</div>
        <div className="label-text-footer">
          <p>{vol}% /vol</p>
          <p>{cl} cl</p>
        </div>
      </div>
    </div>
  );
};

export default Label;
