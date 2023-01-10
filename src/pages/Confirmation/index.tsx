import React, { useEffect, useState } from "react";

// import stylesheets
import "./confirmation.scss";
import { useNavigate } from "react-router-dom";

import useStore from "../../useStore";

const Confirmation = () => {
  const navigate = useNavigate();
  const { T } = useStore();

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
        {T("confirmation.header")} <br />
        {T("confirmation.name")}
      </h1>
    </div>
  );
};

export default Confirmation;
