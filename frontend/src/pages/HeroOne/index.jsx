import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import HerooneRowOne from "./HerooneRowOne";
import React from "react";
export default function HeroOnePage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
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
        <div className="flex flex-col items-center gap-[66px] sm:gap-[33px]">
          {" "}
          <header className="flex flex-col items-center gap-4 self-stretch">
            {" "}
            <div className="container-xs mt-4 flex items-center justify-between gap-5 self-stretch md:flex-col md:px-5">
              {" "}
              <div className="flex w-[70%] items-center justify-between gap-5 md:w-full md:flex-col">
                {" "}
                <ul className="flex flex-wrap items-center gap-8">
                  {" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Heading
                        size="headinglg"
                        as="h5"
                        className="!font-inter text-[20px] font-bold tracking-[-0.60px]"
                      >
                        {" "}
                        Ecommerce{" "}
                      </Heading>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" className="cursor-pointer">
                      {" "}
                      <Text
                        as="p"
                        className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                      >
                        {" "}
                        Shop{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" className="cursor-pointer">
                      {" "}
                      <Text
                        as="p"
                        className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                      >
                        {" "}
                        Stories{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" className="cursor-pointer">
                      {" "}
                      <Text
                        as="p"
                        className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                      >
                        {" "}
                        About{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
                <Input
                  size="xs"
                  shape="square"
                  name="search"
                  placeholder={`Search`}
                  value={searchBarValue2}
                  onChange={(e) => setSearchBarValue2(e.target.value)}
                  prefix={
                    <div className="flex h-[16px] w-[14px] items-center justify-center">
                      {" "}
                      <Img
                        src="images/img_search_text_primary.svg"
                        alt="Search"
                        className="h-[14px] w-[14px] object-contain"
                      />{" "}
                    </div>
                  }
                  suffix={
                    searchBarValue2?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue2("")}
                        height={14}
                        width={14}
                      />
                    ) : null
                  }
                  className="flex-grow gap-3 self-end font-inter tracking-[-0.60px] text-text_secondary"
                />{" "}
              </div>{" "}
              <div className="flex w-[8%] justify-center gap-[22px] self-end md:w-full">
                {" "}
                <div className="flex w-full justify-center gap-1.5">
                  {" "}
                  <a href="#">
                    {" "}
                    <Img
                      src="images/img_bag_text_primary.svg"
                      alt="Bag"
                      className="h-[20px]"
                    />{" "}
                  </a>{" "}
                  <Text
                    as="p"
                    className="text-[17px] font-normal tracking-[-0.60px]"
                  >
                    {" "}
                    3{" "}
                  </Text>{" "}
                </div>{" "}
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px]"
                >
                  {" "}
                  Login{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
            <div className="h-px w-full self-stretch bg-black-900_7f" />{" "}
          </header>{" "}
          <div className="flex w-[50%] flex-col items-center md:w-full md:px-5">
            {" "}
            <Heading
              size="heading_02"
              as="h1"
              className="text-[56px] font-semibold tracking-[-2.40px] md:text-[48px] sm:text-[42px]"
            >
              {" "}
              Better clothing for the planet{" "}
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
        <HerooneRowOne />{" "}
      </div>{" "}
    </>
  );
}
