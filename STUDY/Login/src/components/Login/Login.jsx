import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../constants/Login/Login";
import { showToast } from "../../constants/Swal/Swal_alert";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/img/Lofo.png";
import CheckIcon from "../../assets/img/check.png";
import axiosInstance from '../../lib/axiosInstance';
import Cookies from "js-cookie";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [LgoinKeep, setLoginKeep] = useState(false);
  const navigate = useNavigate();

  const LoginIcon = () => {
    setLoginKeep((prev) => !prev);
  };

  // 유효성 검사
  const lookingForNum = (e) => {
    const inputValue = e.target.value;
    const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    setId(onlyEnglishAndNumbers);
  };

  const lookingForNumInPassword = (e) => {
    const inputValue = e.target.value;
    const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    setPassword(onlyEnglishAndNumbers);
  };

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('/login', { id, password });
      let success = loginUser(id,password);
      const {accessToken, refreshToken } = response.data;
      console.log(success);
      if (success) {
        console.log(success);
        showToast('success', '로그인 성공');
        localStorage.setItem('accessToken', accessToken);
        Cookies.set('refreshToken', refreshToken); // Save refresh token in cookies
        navigate('/main');
      } else {
        showToast("warning", "로그인 실패");
      }
    } catch (error) {
      console.log(error);
      showToast("error", "로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="Login">
      <div className="login-group">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="sc-breuTDiVspsI">
          <div className="Main_FR">
            <form action="" className="login_form">
              <h1>로그인</h1>
              <div className="loginid">
                <div className="idtext">ID</div>
                <input
                  className="login1"
                  type="text"
                  name="username"
                  onChange={lookingForNum}
                />
              </div>
              <div className="loginpasword">
                <div className="paswordtext">비밀번호</div>
                <input
                  className="login2"
                  type="password"
                  name="pwd"
                  onChange={lookingForNumInPassword}
                />
              </div>

              <div className="KeppLogin">
                <div
                  className={LgoinKeep ? "openLogin" : "OLogin"}
                  onClick={LoginIcon}
                >
                  {LgoinKeep && (
                    <div className="Icon">
                      <img src={CheckIcon} alt="" />
                    </div>
                  )}
                </div>
                <p className="KeppLoginText">로그인 유지</p>
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
