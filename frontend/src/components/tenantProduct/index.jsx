import React, { useState } from 'react';
import { Img, Text, Button } from "../index";
import toast from 'react-hot-toast';
import useTenantStore from '../../store/tenantStore';


const TenantProduct = ({ item }) => {

  const [deleting, setDeleting] = useState(false);
  const { deleteProduct} = useTenantStore()

  
  // Fetch the product image when component mounts  
 
  
  const handleDelete = async () => {
    console.log(item.id)
    if (deleting) return;
    setDeleting(true);
    try {
      const result = await deleteProduct(item.id);
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
            src={item.image || '/images/defaultNoData.png'}
            alt={item.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <Text className="text-sm font-bold text-gray-800"><span>Item Name: {item.name}</span></Text>
          <Text className="mt-1 text-sm text-gray-600">Description: <span className='text-black font-bold'>{item.description}</span></Text>
          <Text className="mt-1 text-sm text-gray-600">Price: <span className='text-black'>${item.price}</span></Text>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-600 rounded">
        Quantity :
          <span className="px-2 py-1 font-bold">
             {item.quantity}
          </span>
          
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

export default TenantProduct; 