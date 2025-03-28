import {create} from "zustand";
import axiosUtil from "../utils/axiosUtil";
import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";
import toast from "react-hot-toast";




const userStore = create((set) => ({
    user:null,
    isAuthenticated:false,
    role:null,
    image:null,
    firstname:null,
    users:[],
    login: async(username,password) => {
        try{
            const response = await axiosUtil.post("/login/",{
                "username": username,
                "password": password
            });
          
            if(response){
                console.log("Yes the token received is",response['data']['access_token']);
                const decodedToken = jwtDecode(response['data']['access_token']);
                const username=decodedToken.preferred_username;
                console.log("Yes the username is",username);
                const responseData = await axiosUtil.get(`/login/username/${username}`);
                console.log(responseData);
                console.log(responseData.data)
                set( {user:responseData.data.username, isAuthenticated:true, role:responseData.data.role, image:responseData.data.image, firstname:responseData.data.firstname});
                toast.success("Logged In!");
                return {response_code:200,data:response.data}

                
            }
        }
        catch(error){
            toast.error("Please Try Again!")
            return {response_code:400,err:error}
        }
    },

    logout: () => {
        Cookies.remove("access_token");
        set(() => {
            console.log("Logged Out");
            return{user:null,isAuthenticated:false,token:null}
        })
        toast.success("Logged Out!");
    }
}))

export default userStore;