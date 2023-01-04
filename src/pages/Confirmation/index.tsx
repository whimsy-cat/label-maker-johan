import React, { useEffect, useState } from "react";

// import stylesheets
import "./confirmation.scss";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      navigate("/edit");
    }, 5000);
  }, []);

  return (
    <div className="confirmation">
      <h1>
        We will ship as soon as possible. <br />
        Johan kuikka
      </h1>
    </div>
  );
};

export default Confirmation;
