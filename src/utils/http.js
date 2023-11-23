import axios from "axios";
import config from "../config.json";
const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    const { response, config } = err;
    // console.log(err=);
    if (response?.status === 401) {
      console.log("Refresh token");
      localStorage.setItem("token", "newtoken");
    }
    return Promise.reject(err);
  }
);

export default instance;
