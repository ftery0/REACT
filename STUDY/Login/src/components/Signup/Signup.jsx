import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../constants/Swal/Swal_alert";
import { signup } from "../../constants/Sign/Sign";
import "./Signup.css";

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
        navigate("/")
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
        <h2>회원가입</h2>
        <form action="" onSubmit={signupclick}>
          <p>
            <input
              className="Sigup1"
              type="text"
              name="username"
              placeholder="아이디"
              value={userid}
              onChange={lookingForNum}
            />
          </p>
          <p>
            <input
              className="Sigup2"
              type="password"
              name="pwd"
              placeholder="비밀번호"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </p>
          <p>
            <input
              className="Sigup2"
              type="password"
              name="pwd"
              placeholder="비밀번호를 다시 써주세요"
              onChange={(event) => {
                setRepassword(event.target.value);
              }}
            />
          </p>
          <input type="submit" className="submit" value="회원가입" />
        </form>
        <div className="login-link">
          <p>
            로그인 하기 <button onClick={() => navigate("/")}>로그인</button>
          </p>
        </div>
      </div>
    </div>
  );
}
