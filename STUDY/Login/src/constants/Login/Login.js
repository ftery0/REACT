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
