import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import toast from "react-hot-toast";



const axiosUtil = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    });

const validateStatus = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; 
        console.log("decodedToken",decodedToken)
        console.log("currentTime",currentTime)
        console.log("decodedToken.exp",decodedToken.exp)

        return decodedToken.exp > currentTime; 
    } catch (error) {
        console.error("Invalid token:", error);
        return false; 
    }
}

axiosUtil.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access_token") || "";
        console.log("interceptor",token)
        if (token) {
            const isValid = validateStatus(token);
            if (isValid){
                config.headers.Authorization = `Bearer ${token}`;
            }
            else{
                console.log("Token expired or invalid. Logging out...");
                Cookies.remove("access_token"); // Clear the expired token
                toast.error("Session expired. Please login again.");
                window.location.href = "/heroone"; 
            }
        }
        return config;
    },
    (error) => {
      
        return Promise.reject(error);
    }
);

export default axiosUtil;
