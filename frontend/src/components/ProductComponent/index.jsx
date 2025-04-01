import { Button, Text, SelectBox, Img, Heading } from "../../components";
import Header from "../../components/Header";
import productStore from "../../store/productStore";
import { useParams } from "react-router-dom";

import React, { useEffect } from "react";
const dropDownOptions = [
  { label: "S", value: "option1" },
  { label: "M", value: "option2" },
  { label: "L", value: "option3" },
  { label: "XL", value: "option3" },
];
export default function ProductComponent() {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();
  const { fetchProduct, currentProduct} = productStore();
  console.log(id);
  useEffect(() => {
    fetchProduct(id);
  }, [id,fetchProduct]);

  const {name,description,price,category} = currentProduct;
  console.log(category);

  return (
    <>
      <Header className="bg-primary-0" />
      
        <div className="w-screen h-[calc(100vh-100px)] flex items-center justify-evenly  ">
          <div className="flex justify-evenly items-center w-[50%] md:flex-row md:gap-5">
           
            <div className="flex w-[44%] flex-col gap-1.5 items-start md:px-5">
              {/* Heading and price section */}
              <div className="flex flex-col items-start self-stretch">
                <Heading
                  size="heading2xl"
                  as="h1"
                  className="text-[36px] font-semibold tracking-[-1.08px] md:text-[34px] sm:text-[32px]"
                >
                  {name}
                </Heading>
                <Text
                  size="textxl"
                  as="p"
                  className="text-[24px] font-normal tracking-[-0.72px] md:text-[22px]"
                >
                  ${price}
                </Text>
              </div>
              {/* heading and price section */}
              {/* Desc */}
              <Text
                as="p"
                className="mt-4 w-[68%] text-[17px] font-normal leading-6 tracking-[-0.51px] md:w-full"
              >
                {description}
              </Text>
              {/* Desc */}
              {/* quantity and dropdown */}
              <div className="mt-3.5 flex gap-4 self-stretch">
                {/* quantity */}
                <div className="flex w-[32%] items-center justify-between gap-5 border border-solid border-text_primary px-2.5 py-3">
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      setQuantity((quantity) =>
                        quantity < 1 ? 0 : quantity - 1
                      );
                    }}
                    className="flex cursor-pointer flex-col"
                  >
                    <Img
                      src="/images/img_arrow_down.svg"
                      alt="Arrowdownone"
                      className="h-[20px]"
                    />
                  </div>
                  <Text
                    size="paragraph_02"
                    as="p"
                    className="text-[18px] font-normal tracking-[-0.30px] !text-primary-0"
                  >
                    {quantity}
                  </Text>
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      setQuantity((quantity) =>
                        quantity >= 5 ? 1 : quantity + 1
                      );
                    }}
                    className="flex cursor-pointer flex-col"
                  >
                  <Img
                    src="/images/img_plus.svg"
                    alt="Plusone"
                    className="h-[20px]"
                  />
                  </div>
                </div>
                {/* quantity */}
                {/* dropdown */}
                {category === "clothing" && (
                <SelectBox
                  color="indigo_900"
                  size="sm"
                  shape="square"
                  indicator={
                    <Img
                      src="/images/img_arrowdown_primary_0.svg"
                      alt="Arrow Down"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  name="dropdownone_one"
                  placeholder={`M`}
                  options={dropDownOptions}
                  className="w-[32%] gap-4 !border px-3.5 font-inter tracking-[-0.30px]"
                />) }
                {/* dropdown */}
              </div>
              {/* quantity and dropdown */}
             {/* Add to cart and dropdown buttons */}
              <div className="mt-[22px] flex gap-[13px] self-stretch">
                {/* Add to cart Button */}
                <Button
                  variant="fill"
                  shape="square"
                  className="min-w-[198px] border-[0.5px] border-primary-0 px-8 py-2 font-semibold tracking-[-0.40px] sm:px-5  hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f" 
                >
                  Add to Cart - ${price}
                </Button>
                {/* Add to cart Button */}
                {/* buy now button */}
                <Button
                  color="blue_A400"
                  variant="fill"
                  shape="square"
                  className="min-w-[138px] border-[0.5px] border-blue-a400 py-2 px-[34px] font-semibold tracking-[-0.40px] sm:px-5  hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f "
                >
                  Buy Now
                </Button>
                 {/* buy now button */}
              </div>
               {/* Add to cart and dropdown buttons */}
            </div>
             {/* placeholder */}
             <div className="relative ml-[-70px]  h-[350px] w-[350px] bg-gray-400" />
              {/* placeholder */}
          </div>
        </div>
      
    </>
  );
}
