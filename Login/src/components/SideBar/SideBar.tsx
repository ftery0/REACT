import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../assets/img/dehaze.png";
import "./SideBar.css"
const SideBar = ()=>{
    const [isMenuVisible, setMenuVisible] = useState(true);
    const navigate =useNavigate();
    
    const menuClickTR = () => {
        setMenuVisible(false);
      };
      const menuClickFA = () => {
        setMenuVisible(true);
      };
    return(
        <header className="header">
        <h1 className="LOGO" onClick={()=>navigate("/main")}>TEST</h1>
        
        {isMenuVisible && (
          <div className="menuHeader" onClick={menuClickTR}>
            <img src={Menu} alt="Menu" />
          </div>
        )}
        {!isMenuVisible && (
          <div className="MenuotherDiv">
            <div className="menuHeader" onClick={menuClickFA}>
              <img src={Menu} alt="Menu" />
            </div>
            <div className="menuBar">
              <div className="MenuBarCT" onClick={()=>navigate("/profile")} id="MENUNUMBER1">
                <div className="MenuNV">
                  <span >내정보</span>
                </div>
                <div className="UNDERBAR"></div>
              </div>
              <div className="MenuBarCT" id="MENUNUMBER2">
                <div className="MenuNV">
                  <span>작품</span>
                </div>
                <div className="UNDERBAR"></div>
              </div>
              <div className="MenuBarCT" id="MENUNUMBER3">
                <div className="MenuNV">
                  <span>추억</span>
                </div>
                <div className="UNDERBAR"></div>
              </div>
            </div>
          </div>
        )}
      </header>
    )
}

export default SideBar