import { Text, Heading } from "./..";
import React from "react";
export default function ProductDetails({...props}){
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-3.5`}
    >
      <div className="flex flex-col items-center justify-center gap-2.5">
      <div className="h-[264px] w-[264px] bg-gray-400" />
      <div className="flex flex-row justify-between  items-start gap-1.5 self-stretch">
        <div className="flex-col flex-wrap justify-between gap-5 self-stretch">
          <Heading
            size="headingmd"
            as="h6"
            className="text-[27px] font-bold tracking-[-0.40px]"
          >
            {props.name}
          </Heading>
          <Text as="p" className="text-xl text-gray-700 tracking-[-0.40px]">
            {props.description}
          </Text>
        </div>
        <Text as="p" className="text-[10px] font-normal tracking-[-0.40px]">
          {`$${props.price}`}
        </Text>
      </div>
    </div>
    </div>
  );
}
