import React from "react";
import { useNavigate } from "react-router-dom";

function NotF() {
  const navigate = useNavigate();
  return (
    <div className="notf">
      <h1>УПС) Скоро все добавим : - )</h1>
      <button onClick={() => navigate(-1)}>Обратно в меню</button>
    </div>
  );
}

export default NotF;
