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
export default function CreateProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { firstname } = userStore();
  const { createProduct } = useTenantStore();

  const handleCreateProduct = async () => {
    try {
     
      const response = await createProduct(
        name,
        category,
        description,
        price,
        quantity,
        image,
      );

      if (response) {
        console.log("Yes created", response);
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
      setImage("");
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
              <label
                htmlFor="fileName"
                className="flex justify-center items-center !border-[4px] rounded-xl h-[80px] text-center border-gray-400 border-dashed  tracking-[-0.30px]"
              >
                <input
                  id="fileName"
                  type="file"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder={`Quantity`}
                  className="hidden"
                />
                <span className="text-lg font-medium text-gray-600">
                  Click and drag to upload an image
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch">
            <Button
              shape="square"
              onClick={handleCreateProduct}
              className="min-w-[30%] p-2 !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
            >
              Create Product
            </Button>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  );
}
