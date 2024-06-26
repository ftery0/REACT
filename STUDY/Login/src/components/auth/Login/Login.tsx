import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import useLogin from "../../../Hooks/auth/useLogin";
import LOGO from "../../../assets/img/Lofo.png";
import CheckIcon from "../../../assets/img/check.png";


export default function Login() {
  const [LgoinKeep, setLoginKeep] = useState(false);
  const navigate = useNavigate();
  const {
    lookingForNum,
    lookingForNumInPassword,
    handleLogin,
  } = useLogin();

  const LoginIcon = () => {
    setLoginKeep((prev) => !prev);
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
