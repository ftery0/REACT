import axios from "axios";

export async function LoginUser(userId, password) {
  const SERVERURL = "...."; 

  try {
    const response = await axios.post(SERVERURL, {
      userId: userId,
      password: password,
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
