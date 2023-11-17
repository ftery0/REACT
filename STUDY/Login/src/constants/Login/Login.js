// Login.js
import axios from "axios";

const loginUser = async (userid, password) => {
  try {
    const response = await axios.post("<Your API Endpoint>", {
      userid: userid,
      password: password,
    });
    const userData = response.data;

    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

export { loginUser };
