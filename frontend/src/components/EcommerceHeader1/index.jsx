import { CloseSVG } from "../Input/close";
import { Text, Img, Input, Heading } from "..";
import React from "react";
export default function EcommerceHeader1({
  logoText = "Ecommerce",
  shopText = "Shop",
  storiesText = "Stories",
  aboutText = "About",
  searchText = "Search",
  cartItemCount = "3",
  loginText = "Login",
  ...props
}) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch items-center w-full mt-11 mb-1 gap-3 mx-auto lg:px-5 md:px-5 max-w-[1400px]`}
    >
      {" "}
      <div className="container-xs mt-3 flex items-center self-stretch md:flex-col md:px-5">
        
        <div className="flex w-full items-center justify-center gap-4 sm:flex-col">
          {" "}
          <div className="flex flex-1 flex-wrap items-center justify-between gap-5 sm:self-stretch">
            
            <Heading
              size="headinglg"
              as="h5"
              className="!font-inter text-[20px] font-bold tracking-[-0.60px]"
            >
              {logoText}{" "}
            </Heading>
            
            <Text as="p" className="text-[17px] font-normal tracking-[-0.60px]">
              {" "}
              {shopText}
            </Text>
            
            <Text as="p" className="text-[17px] font-normal tracking-[-0.60px]">
              {storiesText}{" "}
            </Text>{" "}
            <Text as="p" className="text-[17px] font-normal tracking-[-0.60px]">
              {aboutText}
            </Text>{" "}
          </div>
          
          <div className="flex items-center gap-3.5 px-4">
            
            <Img
              src="images/img_search.svg"
              alt="Searchone"
              className="h-[16px]"
            />{" "}
            <Text
              as="p"
              className="text-[17px] font-normal tracking-[-0.60px] !text-text_secondary"
            >
              {searchText}
            </Text>{" "}
          </div>
          
        </div>{" "}
        <div className="flex w-full items-center justify-end sm:flex-col">
          
          <Input
            size="sm"
            shape="square"
            name="search"
            placeholder={`Search`}
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e.target.value)}
            prefix={
              <div className="flex h-[16px] w-[14px] items-center justify-center">
                {" "}
                <Img
                  src="images/img_search_gray_500.svg"
                  alt="Search"
                  className="h-[22px] w-[14px] object-contain"
                />{" "}
              </div>
            }
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue1("")}
                  height={22}
                  width={14}
                />
              ) : null
            }
            className="w-[62%] gap-2 !bg-gray_5 font-medium tracking-[-0.20px] !text-text-neutral_dark sm:w-full"
          />{" "}
          <div className="flex gap-[7px]">
            {" "}
            <Img
              src="images/img_bag.svg"
              alt="Bagone"
              className="h-[20px]"
            />{" "}
            <Text as="p" className="text-[17px] font-normal tracking-[-0.60px]">
              {" "}
              {cartItemCount}{" "}
            </Text>{" "}
          </div>{" "}
          <a
            href="Login"
            target="_blank"
            rel="noreferrer"
            className="ml-[22px] sm:ml-0"
          >
            {" "}
            <Text as="p" className="text-[17px] font-normal tracking-[-0.60px]">
              {" "}
              {loginText}{" "}
            </Text>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
      <div className="h-px w-full self-stretch bg-black-900_7f" />{" "}
    </div>
  );
}
