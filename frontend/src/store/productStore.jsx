import {create} from 'zustand';
import axiosUtil from '../utils/axiosUtil';

const productStore = create((set) => ({
    productsList:[],

    fetchProducts: async() => {
        try{
            const response = await axiosUtil.get("/products/");
            console.log(response.data);
            set({productsList:[ ...response.data]});
            return response.data;

        }
        catch(error){
            console.log("No",error);
        }
    },
    
}))

export default productStore;