import {create} from 'zustand';
import axiosUtil from '../utils/axiosUtil';

const productStore = create((set) => ({
    productsList:[],
    currentProduct:{},
    currentPage:1,
    totalPages:10,
    hasMoreProducts: true,
    searchQuery: "",
    
    setSearchQuery: (query) => {
        set({ searchQuery: query });
    },
    
    fetchProducts: async(page=1) => {
        try{
            const response = await axiosUtil.get(`/products/?page=${page}&limit=10`);
            console.log(response.data);
            
            // Check if we've reached the end of available products
            const hasMore = response.data.length > 0;
            
            set((state) => ({
                productsList: page === 1 ? response.data : [...state.productsList, ...response.data],
                currentPage: page,
                hasMoreProducts: hasMore
            }));
            return response.data;

        }
        catch(error){
            console.log("No",error);
        }
    },
    fetchProduct: async(id) => {
        try{
            const response = await axiosUtil.get(`/products/${id}`);
            console.log(response.data);
            set({currentProduct:response.data});
            return response.data;
        }
        catch(error){
            console.log("No",error);
        }
    },
    loadMoreProducts: async () => {
        const currentState = productStore.getState();
        
        // Don't load more if we've reached the end
        if (!currentState.hasMoreProducts) {
            return;
        }
        
        const nextPage = currentState.currentPage + 1;
        currentState.fetchProducts(nextPage);
    },
}))

export default productStore;