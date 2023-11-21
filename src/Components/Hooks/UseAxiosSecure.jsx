import axios from "axios";

const axiosSecureUrl = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  return axiosSecureUrl;
};

export default UseAxiosSecure;
