import { Helmet } from "react-helmet";
import { Button, Text, Heading } from "../../components";
import Header from "../../components/Header";
import HerotwoRowview from "./HerotwoRowview";
import React from "react";
export default function HeroTwoPage() {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>BeeCommerce</title>{" "}
        <meta
          name="description"
          content="Web site created using create-react-app"
        />{" "}
      </Helmet>{" "}
      <div className="flex w-full flex-col gap-[66px] bg-background_primary sm:gap-[33px]">
        {" "}
        <div className="flex flex-col items-center gap-[58px] sm:gap-[29px]">
          {" "}
          <Header className="flex gap-4 self-stretch" />{" "}
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <div className="flex w-[60%] flex-col items-center md:w-full">
              {" "}
              <Heading
                size="heading_02"
                as="h1"
                className="text-[56px] font-semibold tracking-[-2.40px] md:text-[48px] sm:text-[42px]"
              >
                {" "}
                Our latest arrivals{" "}
              </Heading>{" "}
              <Text
                size="paragraph_01"
                as="p"
                className="mt-3 self-stretch text-center text-[20px] font-normal leading-7 tracking-[-0.40px] !text-text_secondary"
              >
                {" "}
                Create screens directly in Method or add your images from Sketch
                or Figma. You can even sync designs from your cloud storage!{" "}
              </Text>{" "}
              <Button
                shape="square"
                className="min-w-[194px] !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5"
              >
                {" "}
                Shop All{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <HerotwoRowview />{" "}
      </div>{" "}
    </>
  );
}
