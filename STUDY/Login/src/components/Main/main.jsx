import React, { Component } from "react";
import "./main.css";
import Menu from "../../assets/img/dehaze.png";

class Main extends Component {
    state = {
        isMenuVisible: true
    };

    menuClickTR = () => {
        this.setState({ isMenuVisible: false }); 
    };
    menuClickFA = () => {

        this.setState({ isMenuVisible: true})
    }

    render() {
        return (
            <div className="Main">
                <header className="header">
                    <h1 className="LOGO">TEST</h1>
                    {this.state.isMenuVisible && (
                        <div className="menuHeader" onClick={this.menuClickTR}>
                            <img src={Menu} alt="Menu"/>
                        </div>
                    )}
                     {!this.state.isMenuVisible && (
                    <div className="MenuotherDiv">
                        <div className="menuHeader" onClick={this.menuClickFA}>
                            <img src={Menu} alt="Menu"/>
                        </div>
                        <div className="menuBar">
                            <div className="MenuBarCT" id="MENUNUMBER1">내정보</div>
                            <div className="MenuBarCT" id="MENUNUMBER2">작품</div>
                            <div className="MenuBarCT" id="MENUNUMBER2">추억</div>
                        </div>
                        
                    </div>
                )}
                </header>
               <div className="MAINVIEW">
              
               </div>
            </div>
        );
    }
}

export default Main;
