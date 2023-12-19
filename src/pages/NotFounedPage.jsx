import React from "react";
import "../css/notfouned.scss";
import { useNavigate } from "react-router-dom";

function NotFounedPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="not-container">
        <div>
          <h2>Извините но такой страницы не существует :)</h2>
          <h3 onClick={() => navigate("/categories")}>Главное меню</h3>
        </div>
      </div>
    </>
  );
}

export default NotFounedPage;
