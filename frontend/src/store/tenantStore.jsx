import { create } from "zustand";
import toast from "react-hot-toast";
import axiosUtil from "../utils/axiosUtil";

const tenantStore = (set, get) => ({
  tenants: [],
  products: [],
  myproducts:[],
  currentTenantemail: "",
  currentTenantusername: "",
  currentTenantfirstname: "",
  currentTenantImage: "",
  createTenant: async (
    username,
    email,
    firstname,
    lastname,
    password,
    image
  ) => {
    try {
      const response = await axiosUtil.post("/tenant/create", {
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        role: "tenant",
        password: password,
        image: image || null,
      });

      if (response) {
        toast.success("Tenant Created Successfully!");
        console.log(response);
        set((state) => ({
          tenants: [
            ...state.tenants,
            { username, email, firstname, lastname, image },
          ],
        }));
        return { response_code: 200, data: response.data };
      }
    } catch (error) {
      toast.error("Please Try Again!");
      return { response_code: 400, err: error };
    }
  
  },

  createProduct: async (
    name,
    category,
    description,
    price,
    quantity,
    image
  ) => {
    try {
      const response = await axiosUtil.post("/tenant/createproduct", {
        name: name,
        description: description,
        price: parseInt(price),
        category: category,
        quantity: parseInt(quantity),
        image: image || "",
      });

      if (response) {
        toast.success("Product Created Successfully!");
        console.log(response);
        set((state) => ({
          products: [
            ...state.products,
            { name, description, price, category, quantity, image },
          ],
        }));
        return { response_code: 200, data: response.data };
      } else {
        toast.error("Please Try Again!");
        return { response_code: 400 };
      }
    } catch (error) {
      console.log("Error creating product ", error);
    }
  },

  fetchMyProducts : async() => {
    try{
      const response = await axiosUtil.get("/tenant/myproducts/get")
      console.log("################################################################",response.data);
      set({myproducts:response.data});
    }
    catch(error){
      console.log("################################################Error in fetching my products",error); 
    }
  },

  deleteProduct : async(id) => {
    try{
      const response = await axiosUtil.delete(`/tenant/deleteproduct/${id}`);
      if (response.data) {
        await get().fetchMyProducts();
        // toast.success("Product deleted Successfully")
        return { success: true, data: response.data };
      }
      // toast.error("Not able to delete")
      return { success: false, error: 'Failed to delete product item' };
    }
    catch(error){
      console.log(error);
      // toast.error("Not able to delete")
      return { success: false, error: error.message };
    }
  }
  ,
  getAllTenants: async () => {
    const response = await axiosUtil.get("/tenant");
    const data = response.data;
    console.log(data);
    set({tenants:data});
  },
  deleteTenant : async(id) => {
    try{
      const response = await axiosUtil.delete(`/tenant/delete/${id}`);
      if (response.data) {
        await get().getAllTenants();
        // toast.success("Product deleted Successfully")
        return { success: true, data: response.data };
      }
      // toast.error("Not able to delete")
      return { success: false, error: 'Failed to delete product item' };
    }
    catch(error){
      console.log(error);
      // toast.error("Not able to delete")
      return { success: false, error: error.message };
    }
  }
});

const useTenantStore = create(tenantStore);
export default useTenantStore;
