import React, { useEffect, useState } from "react";

// use antd
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

// import stylesheets
import "./label.scss";

interface LabelProps {
  wineName: string;
  vol: string;
  cl: string;
  tagLine: string;
  color: string;
}

const Label = ({ wineName, vol, cl, tagLine, color }: LabelProps) => {
  const [fontHeaderSize, setFontHeaderSize] = useState(15);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (wineName.length > 0 && wineName.length <= 14) setFontHeaderSize(15);
    else if (wineName.length > 14 && wineName.length <= 18)
      setFontHeaderSize(12);
    else if (wineName.length > 18) setFontHeaderSize(10);
  }, [wineName]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div className="label">
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </ImgCrop>
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
