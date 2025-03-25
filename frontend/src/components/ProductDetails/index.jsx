import { Text, Heading } from "./..";
import React from "react";
export default function ProductDetails({
  productTitle = "Men’s Winter Jacket",
  productSize = "M",
  productPrice = "$99",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-3.5`}
    >
      {" "}
      <div className="h-[264px] w-[264px] bg-gray-400" />{" "}
      <div className="flex flex-col items-start gap-0.5 self-stretch">
        {" "}
        <div className="flex flex-wrap justify-between gap-5 self-stretch">
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
