import React from "react";
import "../css/goback.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ArrowLeft() {
  const navigate = useNavigate();
  return (
    <div className="back-main" onClick={() => navigate("/categories")}>
      <div className="back-container">
        <div className="back">
          <FaArrowLeftLong className="back-icon" />
        </div>
      </div>
    </div>
  );
}

export default ArrowLeft;
