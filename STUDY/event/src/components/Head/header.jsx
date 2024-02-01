import React from "react";
import "./head.css";

const Header = () => {
  return (
    <div className="Head">
      <h1 className="Logo">로고</h1>
      <ul className="header_ul">
        <nav className="header_li">홈</nav>
        <nav className="header_li">자세히</nav>
        <nav className="header_li">테스트</nav>
      </ul>
    </div>
  )
};

export default Header;
