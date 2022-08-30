import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9005/",
});
export default axiosInstance;
