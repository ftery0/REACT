import React, { useEffect, useState } from "react";
import axios from "axios";
const UsePost = () => {
  const SERVERURL = "http://localhost:8080";
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState();
  const accessToken = localStorage.getItem("accessToken");
  const getPosts = async () => {
    try {
      const response = await axios.get(`${SERVERURL}/posts`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return {
    posts,
  };
};
export default UsePost;
