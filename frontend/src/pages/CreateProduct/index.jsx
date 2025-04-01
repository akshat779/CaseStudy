/* eslint-disable no-unused-vars */
import { Text, Heading, CheckBox, Input, Button } from "../../components";
import FooterPage from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import axiosUtil from "../../utils/axiosUtil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/userStore";
import toast from "react-hot-toast";
import useTenantStore from "../../store/tenantStore";
import { uploadImageToCloudinary } from "../../utils/cloudinaryConfig";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();
  const { firstname } = userStore();
  const { createProduct } = useTenantStore();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPEG, PNG, JPG, GIF, WEBP)");
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }
    
    // Create a local preview
    const localPreview = URL.createObjectURL(file);
    setPreviewImage(localPreview);
    
    // Start upload to Cloudinary
    setIsUploading(true);
    setUploadProgress(10);
    
    try {
      toast.loading("Uploading image...");
      
      // Upload to Cloudinary with progress tracking
      const result = await uploadImageToCloudinary(file, (progress) => {
        setUploadProgress(progress);
      });
      
      if (result.success) {
        setImageUrl(result.url);
        toast.dismiss();
        toast.success("Image uploaded successfully!");
      } else {
        toast.dismiss();
        toast.error("Failed to upload image. Please try again.");
        URL.revokeObjectURL(localPreview);
        setPreviewImage("");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error uploading image: " + error.message);
      URL.revokeObjectURL(localPreview);
      setPreviewImage("");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCreateProduct = async () => {
    try {
      if (!name || !category || !description || !price || !quantity) {
        toast.error("Please fill in all required fields");
        return;
      }
      
      if (!imageUrl) {
        toast.error("Please upload a product image");
        return;
      }
     
      const response = await createProduct(
        name,
        category,
        description,
        price,
        quantity,
        imageUrl, // Using the Cloudinary URL instead of base64
      );

      if (response) {
        toast.success("Product created successfully!");
        navigate("/heroone");
      }
    } catch (error) {
      toast.error("Please Try Again!");
      console.log("No", error);
    } finally {
      setName("");
      setCategory("");
      setDescription("");
      setPrice("");
      setQuantity("");
      setImageUrl("");
      setPreviewImage("");
    }
  };

  return (
    <>
      <Header />

      <div className="flex h-[calc(100vh-90px)] w-full justify-center items-center md:w-full border-[1px] border-black">
        <div className="flex  flex-col items-start gap-6 self bg-colors-white px-6 py-[30px] w-[30%] sm:p-5 border-[1px] border-black">
          <Heading
            size="heading_04"
            as="h1"
            className="ml-1 text-[22px] font-semibold tracking-[-0.55px] !text-colors-base-color_6 md:ml-0"
          >
            Welcome {firstname} 👋
          </Heading>
          <Heading
            as="h2"
            className="ml-1 text-[16px] font-medium tracking-[-0.20px] !text-colors-grey-grey_2 md:ml-0"
          >
            Create a New Product
          </Heading>
          <div className="mb-[22px] ml-1 flex flex-col gap-4 self-stretch md:ml-0">
            <div className="flex flex-col gap-4">
              <Input
                shape="square"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={`Name of Product`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <Input
                shape="square"
                type="email"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder={`Category`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <textarea
                cols={2}
                rows={4}
                className="!border-[0.5px] px-3 py-3 tracking-[-0.30px]"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={`Description`}
              ></textarea>

              <Input
                shape="square"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder={`Price`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <Input
                shape="square"
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder={`Quantity`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              
              <div className="w-full">
                <label
                  htmlFor="imageUpload"
                  className="flex flex-col justify-center items-center !border-[4px] rounded-xl h-[80px] text-center border-gray-400 border-dashed tracking-[-0.30px] cursor-pointer relative overflow-hidden"
                >
                  {previewImage ? (
                    <div className="absolute inset-0 w-full h-full">
                      <img 
                        src={previewImage} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {isUploading 
                            ? `Uploading: ${uploadProgress}%` 
                            : "Click to change image"}
                        </span>
                      </div>
                      {isUploading && (
                        <div 
                          className="absolute bottom-0 left-0 h-1 bg-green-400" 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      )}
                    </div>
                  ) : (
                    <span className="text-lg font-medium text-gray-600">
                      {isUploading ? `Uploading: ${uploadProgress}%` : "Click to upload an image"}
                    </span>
                  )}
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={isUploading}
                  />
                </label>
                {!previewImage && (
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    Supported formats: JPEG, PNG, JPG, GIF, WEBP (max 5MB)
                  </p>
                )}
                {imageUrl && (
                  <p className="text-xs text-green-500 mt-1 text-center">
                    ✓ Image will be served from Cloudinary CDN
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch">
            <Button
              shape="square"
              onClick={handleCreateProduct}
              disabled={isUploading}
              className={`min-w-[30%] p-2 !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isUploading ? "Uploading Image..." : "Create Product"}
            </Button>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  );
}
