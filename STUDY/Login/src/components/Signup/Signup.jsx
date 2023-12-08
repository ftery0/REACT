import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../constants/Swal/Swal_alert";
import { signup } from "../../constants/Sign/Sign";
import "./Signup.css";
import LOGO from "../../assets/img/Lofo.png";

export default function Signup() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const lookingForNum = (e) => {
    const inputValue = e.target.value;
    const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    setUserId(onlyEnglishAndNumbers);
  };

  const signupclick = async (e) => {
    e.preventDefault();
    if (userid === "") {
      showToast("question", "아이디를 써주세요");
      return;
    }
    if (password !== repassword) {
      showToast("question", "비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const success = await signup(userid, password, repassword);
      if (success) {
        showToast("success", "회원가입 성공");
        navigate("/");
      } else {
        showToast("warning", "회원가입 실패");
      }
    } catch (error) {
      showToast("error", "서버 오류");
    }
  };

  return (
    <div className="SigupMain">
      <div className="Sigup-group">
        <div class="logo">
          <img src={LOGO} />
        </div>
        <div className="sc-breuTDiVspsI">
          <div class="Main_FR">
            

            <form action="" className="signupFrom" onSubmit={signupclick}>
            <h1>회원가입</h1>
              
              <div className="sigupId">
                <div className="idtext">ID</div>
                <input
                  className="Sigup1"
                  type="text"
                  name="username"
                  placeholder="dgsw1214"
                  value={userid}
                  onChange={lookingForNum}
                />
              </div>
              <div className="sigupPW">
              <div className="paswordtext">비밀번호</div>
                <input
                  className="Sigup2"
                  type="password"
                  name="pwd"
                  placeholder="dgsw2023"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="sigupPW">
              <div className="paswordtextAg">새로운 비밀번호</div>
                <input
                  className="Sigup2"
                  type="password"
                  name="pwd"
                  placeholder="비밀번호를 다시 써주세요"
                  onChange={(event) => {
                    setRepassword(event.target.value);
                  }}
                />
              </div>
              <input type="submit" className="submit" value="회원가입" />
              <div className="login-link">
              <p>
                로그인 하기
                <button onClick={() => navigate("/")}>로그인</button>
              </p>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
