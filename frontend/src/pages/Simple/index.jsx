import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import EcommerceHeader from "../../components/EcommerceHeader";
import React, { Suspense } from "react";
const data = [
  {
    logoText: "Ecommerce",
    shopText: "Shop",
    storiesText: "Stories",
    aboutText: "About",
    searchIcon: "images/img_search.svg",
    searchText: "Search",
    bagIcon: "images/img_bag.svg",
    cartItemCount: "3",
    loginText: "Login",
  },
  {
    logoText: "Ecommerce",
    shopText: "Shop",
    storiesText: "Stories",
    aboutText: "About",
    searchIcon: "images/img_search_colors_white.svg",
    searchText: "Search",
    bagIcon: "images/img_bag_colors_white.svg",
    cartItemCount: "3",
    loginText: "Login",
  },
  {
    logoText: "Ecommerce",
    shopText: "Shop",
    storiesText: "Stories",
    aboutText: "About",
    searchIcon: "images/img_search.svg",
    searchText: "Search",
    bagIcon: "images/img_bag.svg",
    cartItemCount: "3",
    loginText: "Login",
  },
  {
    logoText: "Ecommerce",
    shopText: "Shop",
    storiesText: "Stories",
    aboutText: "About",
    searchIcon: "images/img_search.svg",
    searchText: "Search",
    bagIcon: "images/img_bag.svg",
    cartItemCount: "3",
    loginText: "Login",
  },
];
export default function SimplePage() {
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
      <div className="flex w-full flex-col items-start justify-center gap-[34px] bg-background_primary py-[62px] pl-[90px] pr-14 lg:py-8 lg:pl-8 md:p-5 sm:p-4">
        {" "}
        <Heading
          size="heading_01"
          as="h1"
          className="text-[72px] font-semibold tracking-[-2.16px] lg:text-[48px] md:text-[48px]"
        >
          {" "}
          Simple{" "}
        </Heading>{" "}
        <div className="w-[98%] lg:w-full md:w-full">
          {" "}
          <div className="mb-7 mt-8 flex flex-col gap-5 rounded-[5px] border border-dashed border-deep_purple-a200 p-5">
            {" "}
            <Suspense fallback={<div>Loading feed...</div>}>
              {" "}
              {data.map((d, index) => (
                <EcommerceHeader {...d} key={"navbar" + index} />
              ))}{" "}
            </Suspense>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
