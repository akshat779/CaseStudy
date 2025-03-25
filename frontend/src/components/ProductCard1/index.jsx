import { Text, Heading } from "./..";
import React from "react";
export default function ProductCard1({
  productTitle = "Men’s Winter Jacket",
  productSize = "M",
  productPrice = "$99",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center w-[24%] md:w-full`}
    >
      {" "}
      <div className="flex flex-col items-start self-stretch">
        {" "}
        <div className="h-[264px] w-[264px] bg-gray-400" />{" "}
        <div className="mt-3.5 flex flex-wrap justify-between gap-5 self-stretch">
          {" "}
          <Heading
            size="headingmd"
            as="h6"
            className="text-[17px] font-bold tracking-[-0.40px]"
          >
            {" "}
            {productTitle}{" "}
          </Heading>{" "}
          <Text as="p" className="text-[17px] font-normal tracking-[-0.40px]">
            {" "}
            {productSize}{" "}
          </Text>{" "}
        </div>{" "}
        <Text as="p" className="text-[17px] font-normal tracking-[-0.40px]">
          {" "}
          {productPrice}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
