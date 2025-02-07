import axios from "axios";
//const baseURL: string = "http://localhost:8000";
const baseURL: string =  "https://expen-track-backend.vercel.app";
const axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance;
