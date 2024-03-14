import React from "react";
import "./Profile.css"
import SideBar from "../SideBar/SideBar";
import UseProfile from "../../Hooks/Profile/useprofile";

const Profile = ()=>{
   const {name}=UseProfile()
return(
    <>
    <SideBar/>
    <p className="username">{name}</p>
    </>
)
}

export default Profile