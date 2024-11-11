import axios from "axios";
import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import { showToast } from "../../constants/Swal/Swal_alert";
const UseSignup= ()=>{
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [username, setUsername] = useState("");
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
        const success = await axios.post("http://localhost:8080/createuser",{
            id: userid,
            username: username,
            password: password,
        })
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
return{
    username,
    userid,
    lookingForNum,
    signupclick,
    setUsername,
    setPassword,
    setRepassword,
    navigate
}
}
export default UseSignup