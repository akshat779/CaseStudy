import { create } from "zustand";
import toast from "react-hot-toast";
import axiosUtil from "../utils/axiosUtil";

const tenantStore = (set, get) => ({
  tenants: [],
  products: [],
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
});

const useTenantStore = create(tenantStore);
export default useTenantStore;
