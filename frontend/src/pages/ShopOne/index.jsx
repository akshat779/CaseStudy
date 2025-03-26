import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import Header from "../../components/Header";
import ShoponeColumntwo from "./ShoponeColumntwo";
import React from "react";
export default function ShopOnePage() {
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
      <div className="flex w-full flex-col gap-10 bg-background_primary">
        {" "}
        <div className="flex flex-col items-center gap-[46px] bg-primary-0">
          {" "}
          <Header className="self-stretch" />{" "}
          <div className="container-sm mb-[46px] px-1 md:px-5">
            {" "}
            <div className="flex flex-col items-start">
              {" "}
              <Heading
                size="heading_03"
                as="h1"
                className="text-[36px] font-semibold tracking-[-1.50px] !text-colors-white md:text-[34px] sm:text-[32px]"
              >
                {" "}
                Shop Men’s{" "}
              </Heading>{" "}
              <Text
                size="paragraph_02"
                as="p"
                className="w-[42%] text-[18px] font-normal leading-[26px] tracking-[-0.30px] !text-colors-white md:w-full"
              >
                {" "}
                Revamp your style with the latest designer trends in men’s
                clothing or achieve a perfectly curated wardrobe thanks to our
                line-up of timeless pieces.{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <ShoponeColumntwo />{" "}
      </div>{" "}
    </>
  );
}
