import React, { useEffect, useState } from "react";
import "./main.css";
import Menu from "../../assets/img/dehaze.png";
import axios from "axios";
import axiosInstance from '../../lib/axiosInstance';

const Main = () => {
    const SERVERURL ="http://localhost:8080";
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [posts, setPosts] = useState([]);
  const [name , setName] = useState();
  
  const menuClickTR = () => {
    setMenuVisible(false);
  };
  const menuClickFA = () => {
    setMenuVisible(true);
  };
  useEffect(() => {
    
    const accessToken = localStorage.getItem("accessToken");
    const getUserInfo = async () => {
      try {
        const response = await axiosInstance.get(`${SERVERURL}/profile`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setName(response.data.data.username);
      } catch (error) {
        console.log("error", error);
      }
    };
    const getPosts = async () => {
      try {
        const response = await axiosInstance.get(`${SERVERURL}/posts`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getUserInfo();
  
    getUserInfo();
  }, []);
   
  return (
    <div className="Main">
        <p className="username">{name}</p>
      <header className="header">
        <h1 className="LOGO">TEST</h1>
        
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
              <div className="MenuBarCT" id="MENUNUMBER1">
                <div className="MenuNV">
                  <span>내정보</span>
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
      <div className="MAINVIEW">
        <div className="POST">
          <div className="Create_Post">
            <div className="Real_Post">
            </div>
            {posts.map((post) => (
                <div className="Real_Post" key={post.id}>
                  <div className="post_Name">{post.name}</div>
                  <div className="post_pic">{post.image}</div>
                  <div className="post_tit">{post.title}</div>
                  <div className="posst_Like">{post.like}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
