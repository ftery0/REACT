import React, { useState } from "react";
import "./Signup.css";
import LOGO from "../../../assets/img/Lofo.png";
import UseSignup from "../../../Hooks/auth/useSignup";

export default function Signup() {
 const {
  userid,
  setUsername,
  lookingForNum,
  signupclick,
  setPassword,
  setRepassword,
  navigate,
 }=UseSignup()
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
              
              <div className="sigup">
                <div className="text">ID</div>
                <input
                  className="Sigup1"
                  type="text"
                  name="username"
                  placeholder="dgsw1214"
                  value={userid}
                  onChange={lookingForNum}
                />
              </div>
              <div className="sigup">
              <div className="text">이름</div>
                <input
                  className="Sigup2"
                  type="text"
                  
                  placeholder="이름을 써주세요"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="sigup">
              <div className="text">비밀번호</div>
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
              <div className="sigup">
              <div className="text">새로운 비밀번호</div>
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
