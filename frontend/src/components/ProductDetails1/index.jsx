import { Text, Heading, Button } from "..";
import React from "react";
export default function ProductDetails1({
  productTitle = "Men’s winter jacket",
  productSize = "Size: L",
  productQuantity = "Quantity: 1",
  productPrice = "$99",
  removeButtonText = "Remove",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} w-[84%] flex sm:flex-col items-center justify-start self-stretch gap-1.5 flex-1 my-6 `}
    >
      <div className="flex flex-1 items-center justify-between gap-1.5 sm:self-stretch w-full  my-5  ">
        <div className="flex w-[50%] flex-row items-end justify-between gap-1.5 self-stretch px-2 py-3 ">
          <div className="flex flex-col items-start gap-3">
            <Heading
              size="heading_04"
              as="h5"
              className="text-[22px] font-semibold tracking-[-0.55px] sm:text-[18px]"
            >
              {productTitle}
            </Heading>
            <Text
              size="paragraph_04"
              as="p"
              className="text-[14px] font-normal tracking-[-0.40px]"
            >
              {productSize}
            </Text>
            <Text
              size="paragraph_04"
              as="p"
              className="text-[14px] font-normal tracking-[-0.40px]"
            >
              {productQuantity}
            </Text>
            <Heading
              size="heading_04"
              as="h5"
              className="text-[22px] font-semibold tracking-[-0.55px] sm:text-[18px]"
            >
              {productPrice}
            </Heading>
          </div>
          <div className="">
            <Button
              shape="square"
              className="min-w-[194px] !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 p-2 hover:font-bold mt-6  hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
            >
              {removeButtonText}
            </Button>
          </div>
        </div>
        {/* placeholder */}
        <div className="h-[132px] w-[128px] bg-gray-400 px-10"/>
        {/* placeholder */}
      </div>
    </div>
  );
}
