import {create} from "zustand";
import axiosUtil from "../utils/axiosUtil";
import {jwtDecode} from "jwt-decode";


const userStore = create((set) => ({
    user:null,
    isAuthenticated:false,
    token:null,
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
                const response_new = await axiosUtil.get(`/user/username/${username}`)
                console.log("Yes the response is",response_new);
               

            }
        }
        catch(error){
            console.log("No",error);
        }
    }
}))

export default userStore;