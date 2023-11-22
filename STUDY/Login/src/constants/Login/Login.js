import axios from "axios";

const loginUser = async (userid, password) => {
const SERVERURL = "#"; 
  try {
    const response = await axios.post(" ", {
      userid: userid,
      password: password,
    });
    const userData = response.data;

     if (response.status === 200) {
        return true;
      } else {
        return false;
      }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export { loginUser };
export async function LoginUser(userId, password) {
  const SERVERURL = "#"; 

  try {
    const response = await axios.post(SERVERURL, {
      userId: userId,
      password: password,
    });

    if (response.status === 200) {
    const { accessToken, refreshToken } = response.data.data;
    localStorage.setItem("accessToken",accessToken)
    localStorage.setItem("refreshToken",refreshToken)
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
