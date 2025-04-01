import axios from 'axios';

// Get values from environment variables
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET 

// Function to upload image to Cloudinary
export const uploadImageToCloudinary = async (file, onProgress) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
      {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          // Call the progress callback if provided
          if (onProgress && typeof onProgress === 'function') {
            onProgress(percentCompleted);
          }
          console.log(`Upload progress: ${percentCompleted}%`);
        }
      }
    );

    return {
      url: response.data.secure_url,
      publicId: response.data.public_id,
      success: true
    };
  } catch (error) {
    console.error('Error uploading to cloudinary:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Function to build an optimized image URL using Cloudinary's URL-gen
export const getOptimizedImageUrl = (publicId, width = 500, height = 500) => {
  if (!publicId) return '';
  
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_${width},h_${height}/${publicId}`;
}; 