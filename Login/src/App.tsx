import "./App.css";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/Signup/Signup";
import Main from "./components/Main/main";
import Profile from "./components/Profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
