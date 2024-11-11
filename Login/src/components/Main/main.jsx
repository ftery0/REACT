import React from "react";
import "./main.css";
import ImageDiv from '../../assets/img/s.png'
import SideBar from "../SideBar/SideBar";
import UsePost from "../../Hooks/Post/usePost";
import PostItem from "./mainItem";

const Main = () => {
const {
    posts,
}=UsePost();

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
            {posts.map((post, index) => (
            <PostItem post={post} key={index}/>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
