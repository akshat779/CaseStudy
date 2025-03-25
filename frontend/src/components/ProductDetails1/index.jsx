import { Text, Heading } from "..";
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
      className={`${props.className} flex sm:flex-col items-center self-stretch gap-1.5 flex-1`}
    >
      {" "}
      <div className="h-[132px] w-[128px] bg-gray-400" />{" "}
      <div className="flex flex-1 items-center justify-center gap-1.5 sm:self-stretch">
        {" "}
        <div className="flex flex-1 flex-col items-start gap-1.5 px-1 py-1.5 sm:gap-1.5">
          {" "}
          <Heading
            size="heading_04"
            as="h5"
            className="text-[22px] font-semibold tracking-[-0.55px] sm:text-[18px]"
          >
            {" "}
            {productTitle}{" "}
          </Heading>{" "}
          <Text
            size="paragraph_04"
            as="p"
            className="text-[14px] font-normal tracking-[-0.40px]"
          >
            {" "}
            {productSize}{" "}
          </Text>{" "}
          <Text
            size="paragraph_04"
            as="p"
            className="text-[14px] font-normal tracking-[-0.40px]"
          >
            {" "}
            {productQuantity}{" "}
          </Text>{" "}
          <Heading
            size="heading_04"
            as="h5"
            className="text-[22px] font-semibold tracking-[-0.55px] sm:text-[18px]"
          >
            {" "}
            {productPrice}{" "}
          </Heading>{" "}
        </div>{" "}
        <Text
          size="texts"
          as="p"
          className="self-end text-[14px] font-normal tracking-[-0.40px] underline"
        >
          {" "}
          {removeButtonText}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
