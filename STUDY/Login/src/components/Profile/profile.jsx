import React, { useEffect, useState } from "react";
import "./Profile.css"
import SideBar from "../SideBar/SideBar";
import axios from "axios";

const Profile = ()=>{
    const SERVERURL = "http://localhost:8080";
    const [name, setName] = useState();
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const getUserInfo = async () => {
          try {
            const response = await axios.get(`${SERVERURL}/profile`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            setName(response.data.data.username);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        getUserInfo();
      }, []);
return(
    <>
    <SideBar/>
    <p className="username">{name}</p>
    </>
)
}

export default Profile