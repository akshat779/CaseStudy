import React, { useState, useEffect } from 'react';
import { Img, Text, Button } from "../index";
import useCartStore from '../../store/cartStore';
import toast from 'react-hot-toast';
import axiosUtil from '../../utils/axiosUtil';

const CartItem = ({ item }) => {
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const { updateCartItem, deleteCartItem } = useCartStore();
  
  // Fetch the product image when component mounts
  useEffect(() => {
    const fetchProductImage = async () => {
      try {
        // Get the product details to access the image
        const response = await axiosUtil.get(`/products/${item.product_id}`);
        if (response.data && response.data.image) {
          setProductImage(response.data.image);
        }
      } catch (error) {
        console.error('Error fetching product image:', error);
      }
    };
    
    fetchProductImage();
  }, [item.product_id]);
  
  const increaseQuantity = async () => {
    if (updating) return;
    
    setUpdating(true);
    try {
      const result = await updateCartItem(item.id, item.product_id, item.quantity + 1);
      if (!result.success) {
        toast.error("Failed to update quantity");
      }
    } catch (error) {
      toast.error("Error updating cart");
      console.error(error);
    } finally {
      setUpdating(false);
    }
  };
  
  const decreaseQuantity = async () => {
    if (updating || item.quantity <= 1) return;
    
    setUpdating(true);
    try {
      const result = await updateCartItem(item.id, item.product_id, item.quantity - 1);
      if (!result.success) {
        toast.error("Failed to update quantity");
      }
    } catch (error) {
      toast.error("Error updating cart");
      console.error(error);
    } finally {
      setUpdating(false);
    }
  };
  
  const handleDelete = async () => {
    if (deleting) return;
    
    setDeleting(true);
    try {
      const result = await deleteCartItem(item.id);
      if (result.success) {
        toast.success(`Removed ${item.product_name} from cart`);
      } else {
        toast.error("Failed to remove item");
      }
    } catch (error) {
      toast.error("Error removing item");
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };
  
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex items-center space-x-4">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={productImage || '/images/defaultNoData.png'}
            alt={item.product_name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <Text className="text-base font-medium text-gray-900">{item.product_name}</Text>
          <Text className="mt-1 text-sm text-gray-500">Unit Price: ${item.unit_price}</Text>
          <Text className="mt-1 text-sm text-gray-500">Total: ${item.total_price}</Text>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded">
          <button 
            onClick={decreaseQuantity}
            disabled={updating || item.quantity <= 1}
            className={`px-2 py-1 ${updating || item.quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            -
          </button>
          <span className="px-2 py-1 border-x border-gray-300">
            {updating ? '...' : item.quantity}
          </span>
          <button 
            onClick={increaseQuantity}
            disabled={updating}
            className={`px-2 py-1 ${updating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            +
          </button>
        </div>
        
        <button
          onClick={handleDelete}
          disabled={deleting}
          className={`text-gray-500 hover:text-red-700 ${deleting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          title="Remove item"
        >
          {deleting ? 
            "Removing..." : 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          }
        </button>
      </div>
    </div>
  );
};

export default CartItem; 