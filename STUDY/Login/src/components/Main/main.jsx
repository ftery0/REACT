import React, { useEffect, useState } from "react";
import "./main.css";
import ImageDiv from '../../assets/img/s.png'
import axios from "axios";
import axiosInstance from "../../lib/axiosInstance";
import SideBar from "../SideBar/SideBar";

const Main = () => {
  const SERVERURL = "http://localhost:8080";
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
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

  }, []);

  return (
    <div className="Main">
      
      <SideBar />
      <div className="MAINVIEW">
        <div className="POST">
          <div className="Create_Post">
          <div className="Real_Post">
          <div className="post_Name">김가영</div>
                <div className="post_pic" > <img src={ImageDiv} alt="" /></div>
                <div className="post_tit">소포!</div>
                <div className="posst_Like">좋아요 20개</div>
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
