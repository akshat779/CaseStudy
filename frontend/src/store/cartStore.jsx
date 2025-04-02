import { create } from 'zustand';
import axiosUtil from '../utils/axiosUtil';

const useCartStore = create((set, get) => ({
  cartItems: [],
  cartCount: 0,
  
 
  fetchCartItems: async () => {
    try {
      const response = await axiosUtil.get('/user/orders/order-items');
      set({ 
        cartItems: response.data,
        cartCount: response.data.length
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
     
      set({ cartItems: [], cartCount: 0 });
      return [];
    }
  },
  
  
  addToCart: async (productId, quantity) => {
    try {
      const response = await axiosUtil.post('/user/order-items/', {
        product_id: productId,
        quantity: quantity
      });
      
      if (response.data) {
        
        await get().fetchCartItems();
        return { success: true, data: response.data };
      }
      
      return { success: false, error: 'Failed to add item to cart' };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, error: error.message };
    }
  },
  
 
  updateCartItem: async (orderItemId, productId, quantity) => {
    try {
      const response = await axiosUtil.put(`/user/order-items/${orderItemId}`, {
        product_id: productId,
        quantity: quantity
      });
      
      if (response.data) {
        await get().fetchCartItems();
        return { success: true, data: response.data };
      }
      
      return { success: false, error: 'Failed to update cart item' };
    } catch (error) {
      console.error('Error updating cart item:', error);
      return { success: false, error: error.message };
    }
  },
  
 
  deleteCartItem: async (orderItemId) => {
    try {
      const response = await axiosUtil.delete(`/user/order-items/${orderItemId}`);
      
      if (response.status === 200 || response.status === 204) {
        await get().fetchCartItems();
        return { success: true };
      }
      
      return { success: false, error: 'Failed to delete cart item' };
    } catch (error) {
      console.error('Error deleting cart item:', error);
      return { success: false, error: error.message };
    }
  },
  
  
  clearCart: async () => {
    try {
      const response = await axiosUtil.delete(`/user/orderitems`);
      // Reset local state immediately, regardless of the response
      set({ cartItems: [], cartCount: 0 });
      
      if (response.status === 200 || response.status === 204) {
        return { success: true };
      }
      
      return { success: false, error: 'Failed to clear cart on server' };
    } catch (error) {
      console.error('Error clearing cart:', error);
     
      set({ cartItems: [], cartCount: 0 });
      return { success: false, error: error.message };
    }
  },
  
 
  resetCart: () => {
    set({ cartItems: [], cartCount: 0 });
    return { success: true };
  }
}));

export default useCartStore; 