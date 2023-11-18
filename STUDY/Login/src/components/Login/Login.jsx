import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../constants/Login/Login";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Alert = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  const handleLogin = async () => {
    try {

      const success = await loginUser(userid, password);
      console.log(userid)
      console.log(password)
      if (success) {
        Alert.fire({
          icon: 'success',
          title: '로그인 성공'
        });
      } else {
        Alert.fire({
          icon: 'warning',
          title: '로그인 실패'
        });
      }
    } 
    catch (error) {
      Alert.fire({
        icon: 'error',
        title: '로그인 중 오류가 발생했습니다.'
      });
    }
  }

  return (
    <div className="Login">
      <div className="login-group">
        <h2>로그인</h2>
        <form action="" className="login_form">
          <p>
            <input
              className="login1"
              type="text"
              name="username"
              placeholder="아이디"
              onChange={event => { setUserId(event.target.value); }} />
          </p>

          <p>
            <input
              className="login2"
              type="password"
              name="pwd"
              placeholder="비밀번호"
              onChange={event => { setPassword(event.target.value); }} />
          </p>

          <input
            type="button"
            className="submit"
            value="로그인"
            onClick={handleLogin}
          />
        </form>
        <div className="signup-link">
          <p>계정이 없으신가요? <button onClick={()=>navigate("/signup")}>회원가입</button></p>
        </div>
      </div>
    </div>
  );
}
