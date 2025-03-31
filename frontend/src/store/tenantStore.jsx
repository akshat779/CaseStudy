import { create } from "zustand";
import toast from "react-hot-toast";
import axiosUtil from "../utils/axiosUtil";

const tenantStore = (set,get) => ({

    tenants:[],  
    products:[],  
    currentTenantemail:"",
    currentTenantusername:"",
    currentTenantfirstname:"",
    currentTenantImage:"",
    createTenant: async(username,email,firstname,lastname,password,image) => {
        try {
         
            const response = await axiosUtil.post("/tenant/create", {
              username: username,
              email: email,
              firstname: firstname,
              lastname: lastname,
              role: "tenant",
              password: password,
              image: image||null,
            });

           
            if (response) {
              toast.success("Tenant Created Successfully!");
              console.log(response);
              set((state) => ({
                tenants: [
                  ...state.tenants,
                  { username, email, firstname, lastname, image },
                ],
              }))
              return { response_code: 200, data: response.data };
            }
          } catch (error) {
            toast.error("Please Try Again!");
            return { response_code: 400, err: error };
          }
        // set((state) => ({
        //     tenants:[...state.tenants,{username,email,firstname,lastname,sendPasswordResetEmail,image}]
        // }))

    }
    
})

const useTenantStore = create(tenantStore); 
export default useTenantStore;