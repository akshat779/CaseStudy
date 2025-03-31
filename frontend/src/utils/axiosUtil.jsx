import axios from "axios";
import Cookies from "js-cookie";

const axiosUtil = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    });

axiosUtil.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access_token") || "";
        console.log("interceptor",token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosUtil;
