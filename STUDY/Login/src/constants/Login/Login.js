import axios from "axios";
import Cookies from "js-cookie";

const loginUser = async (id, password) => {
  try {
    const response = await axios.post(`http://localhost:8080/login`, {
      id: id,
      password: password,
    },
    );
     if (response.status === 200) {
        localStorage.setItem("accessToken",response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken);
        return response.data.success;
     }else {
        return false;
      }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export { loginUser };