import ImageGallery from "react-image-gallery";

// import stylesheets
import "./labels.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";

const Labels = () => {
  const { T, update }: any = myStore();
  const G: any = myStore();
  const navigate = useNavigate();
  const handleImgClick = (index: any) => {
    update({ curLabel: index });
    navigate("/edit");
  };
  return (
    <div className="labels">
      <h1>Browse Labels</h1>
      <Row>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-1.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(1)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-2.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(2)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-3.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(3)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-4.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(4)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-5.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(5)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-6.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(6)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-7.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(7)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-8.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(8)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-9.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(9)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-10.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(10)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-11.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(11)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-12.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(12)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-13.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(13)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-14.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(14)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-15.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(15)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-16.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(16)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-17.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(17)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-18.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(18)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-19.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(19)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-20.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(20)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-21.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(21)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-22.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(22)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-23.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(23)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-24.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(24)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-25.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(25)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-26.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(26)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-27.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(27)}
          />
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-28.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(28)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-29.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(29)}
          />
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-30.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(30)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Labels;
