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
      <h1> {T("browselabels.header")}</h1>
      <Row>
        <Col
          style={{
            margin: "5px",
          }}
        >
          <img
            src="/labels/Label-1.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(1)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>1</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-2.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(2)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>2</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-3.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(3)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>3</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-4.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(4)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>4</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-5.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(5)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>5</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-6.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(6)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>6</p>
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
          <p style={{ textAlign: "center", fontWeight: "900" }}>7</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-8.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(8)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>8</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-9.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(9)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>9</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-10.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(10)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>10</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-11.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(11)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>11</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-12.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(12)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>12</p>
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
          <p style={{ textAlign: "center", fontWeight: "900" }}>13</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-14.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(14)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>14</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-15.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(15)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>15</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-16.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(16)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>16</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-17.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(17)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>17</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-18.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(18)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>18</p>
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
          <p style={{ textAlign: "center", fontWeight: "900" }}>19</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-20.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(20)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>20</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-21.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(21)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>21</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-22.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(22)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>22</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-23.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(23)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>23</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-24.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(24)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>24</p>
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
          <p style={{ textAlign: "center", fontWeight: "900" }}>25</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-26.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(26)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>26</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-27.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(27)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>27</p>
        </Col>
        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-28.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(28)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>28</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-29.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(29)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>29</p>
        </Col>

        <Col style={{ margin: "5px" }}>
          <img
            src="/labels/Label-30.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(30)}
          />
          <p style={{ textAlign: "center", fontWeight: "900" }}>30</p>
        </Col>
      </Row>
    </div>
  );
};

export default Labels;
