import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const navigate = useNavigate();

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get('refreshToken');

      return axios.get('/refreshtoken', { refreshToken }).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.data.accessToken);
          return instance(originalRequest);
        } else {
          navigate('/login');
          return Promise.reject(error);
        }
      });
    }

    return Promise.reject(error);
  }
);

export default instance;
