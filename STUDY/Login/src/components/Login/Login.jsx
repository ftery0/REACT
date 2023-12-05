import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../constants/Login/Login";
import { showToast } from "../../constants/Swal/Swal_alert";
import { useNavigate } from "react-router-dom";
import SOPO from "../../assets/img/SO.png";

export default function Login() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 유효성 검사
  const lookingForNum = (e) => {
    const inputValue = e.target.value;
    const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    setUserId(onlyEnglishAndNumbers);
  };

  const lookingForNumInPassword = (e) => {
    const inputValue = e.target.value;
    const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    setPassword(onlyEnglishAndNumbers);
  };

  const handleLogin = async () => {
    try {
      const success = await loginUser(userid, password);
      console.log(userid);
      console.log(password);
      if (success) {
        showToast("success", "로그인 성공");
        navigate("/Main");
      } else {
        showToast("warning", "로그인 실패");
      }
    } catch (error) {
      showToast("error", "로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="Login">
      <div className="login-group">
        <div class="logo">
        <img src={SOPO} />
        </div>
        <div className="sc-breuTDiVspsI">
          <div class="Main_login">
            
            <form action="" className="login_form">
            <h1>로그인</h1>
            <div className="loginid">
              <div className="loginidtext">ID</div>
                <input
                  className="login1"
                  type="text"
                  name="username"
                  onChange={lookingForNum}
                />
              
              </div>
              <div className="loginpasword">
              <div className="loginpaswordtext">비밀번호</div>
                <input
                  className="login2"
                  type="password"
                  name="pwd"
                  onChange={lookingForNumInPassword}
                />
              
              </div>

              <input
                type="button"
                className="submit"
                value="로그인"
                onClick={handleLogin}
              />
              <div className="signup-link">
              <p>
                계정이 없으신가요?{" "}
                <button onClick={() => navigate("/signup")}>회원가입</button>
              </p>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
