import React from "react";
import "./head.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="Head">
      <h1 className="Logo">로고</h1>
      <ul className="header_ul">
        <nav className="header_li" onClick={navigate("/")}>홈</nav>
        <nav className="header_li" onClick={navigate("detail")}>자세히</nav>
        <nav className="header_li" onClick={navigate("test")}>테스트</nav>
      </ul>
    </div>
  )
};

export default Header;
