import Login from "../auth/Login/Login";
import Signup from "../auth/Signup/Signup";
import Main from "../Main/main";
import Profile from "../Profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router=()=> {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
