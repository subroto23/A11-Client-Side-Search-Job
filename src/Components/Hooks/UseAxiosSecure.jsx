import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecureUrl = axios.create({
  baseURL: "https://job-search-plum.vercel.app/",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { handleLogOut } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecureUrl.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          handleLogOut()
            .then(() => {
              return navigate("/login");
            })
            .catch((err) => console.log(err));
        }
      }
    );
  }, [handleLogOut, navigate]);
  return axiosSecureUrl;
};

export default UseAxiosSecure;
