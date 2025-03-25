import { Text, Img, Heading } from "..";
import React from "react";
export default function EcommerceHeader({
  logoText = "Ecommerce",
  shopText = "Shop",
  storiesText = "Stories",
  aboutText = "About",
  searchIcon = "images/img_search.svg",
  searchText = "Search",
  bagIcon = "images/img_bag.svg",
  cartItemCount = "3",
  loginText = "Login",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-end self-stretch w-full mx-auto flex-1 max-w-[1400px]`}
    >
      
      <div className="mt-3.5 flex w-full flex-col items-center gap-4">
        
        <div className="container-xs flex items-center self-stretch md:flex-col md:px-5">
          
          <div className="flex flex-1 items-center justify-center md:self-stretch sm:flex-col">
            
            <Heading
              size="headinglg"
              as="h5"
              className="!font-inter text-[20px] font-bold tracking-[-0.60px]"
            >
              {logoText}{" "}
            </Heading>{" "}
            <Text
              as="p"
              className="ml-8 text-[17px] font-normal tracking-[-0.60px] sm:ml-0"
            >
              {shopText}
            </Text>{" "}
            <Text
              as="p"
              className="ml-8 text-[17px] font-normal tracking-[-0.60px] sm:ml-0"
            >
              {storiesText}{" "}
            </Text>
            
            <Text
              as="p"
              className="ml-8 text-[17px] font-normal tracking-[-0.60px] sm:ml-0"
            >
              {aboutText}{" "}
            </Text>
            
            <div className="flex flex-1 items-center gap-3.5 px-8 sm:self-stretch sm:px-5">
              
              <Img src={searchIcon} alt="Search" className="h-[16px]" />{" "}
              <Text
                as="p"
                className="text-[17px] font-normal tracking-[-0.60px] !text-text_secondary"
              >
                {searchText}
              </Text>
              
            </div>
            
          </div>{" "}
          <div className="flex w-[34%] justify-center gap-[22px] md:w-full">
            
            <div className="flex flex-1 justify-end gap-[7px]">
              
              <Img src={bagIcon} alt="Image" className="h-[20px]" />{" "}
              <Text
                as="p"
                className="text-[17px] font-normal tracking-[-0.60px]"
              >
                {cartItemCount}
              </Text>
              
            </div>
            
            <a href="Login" target="_blank" rel="noreferrer">
              
              <Text
                as="p"
                className="text-[17px] font-normal tracking-[-0.60px]"
              >
                {loginText}
              </Text>
              
            </a>
            
          </div>
          
        </div>{" "}
        <div className="h-px w-full self-stretch bg-black-900_7f" />
        
      </div>
      
    </div>
  );
}
