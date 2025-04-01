import { create } from 'zustand';
import axiosUtil from '../utils/axiosUtil';

const useCartStore = create((set, get) => ({
  cartItems: [],
  cartCount: 0,
  
  // Fetch cart items from the server
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
      // If there's an error, we should still update the store with empty cart
      // This handles cases where the cart is cleared on the backend
      set({ cartItems: [], cartCount: 0 });
      return [];
    }
  },
  
  // Add an item to the cart
  addToCart: async (productId, quantity) => {
    try {
      const response = await axiosUtil.post('/user/order-items/', {
        product_id: productId,
        quantity: quantity
      });
      
      if (response.data) {
        // Update the cart items and count
        await get().fetchCartItems();
        return { success: true, data: response.data };
      }
      
      return { success: false, error: 'Failed to add item to cart' };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, error: error.message };
    }
  },
  
  // Update a cart item quantity
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
  
  // Delete a specific cart item
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
  
  // Clear the entire cart
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
      // Still reset the local state even if the server operation fails
      set({ cartItems: [], cartCount: 0 });
      return { success: false, error: error.message };
    }
  },
  
  // Force reset cart (used after placing an order)
  resetCart: () => {
    set({ cartItems: [], cartCount: 0 });
    return { success: true };
  }
}));

export default useCartStore; 