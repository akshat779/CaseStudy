import { CloseSVG } from "../Input/close";
import { Text, Img, Input } from "..";
import React from "react";
export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <header {...props}>
      {" "}
      <div className="mt-3.5 flex w-full flex-col items-center gap-4">
        {" "}
        <div className="container-sm md:px-5">
          {" "}
          <div className="flex items-center justify-between gap-5 md:flex-col">
            {" "}
            <div className="flex w-[70%] items-start justify-between gap-5 md:w-full md:flex-col">
              {" "}
              <ul className="flex items-center gap-8 self-center">
                {" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <div className="w-[112px]" />{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <Text
                      as="p"
                      className="text-[17px] font-normal tracking-[-0.60px] !text-colors-white"
                    >
                      {" "}
                      Shop
                    </Text>
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <Text
                      as="p"
                      className="text-[17px] font-normal tracking-[-0.60px] !text-colors-white"
                    >
                      {" "}
                      Stories{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <Text
                      as="p"
                      className="text-[17px] font-normal tracking-[-0.60px] !text-colors-white"
                    >
                      About{" "}
                    </Text>{" "}
                  </a>
                </li>{" "}
              </ul>{" "}
              <Input
                size="xs"
                shape="square"
                name="search"
                placeholder={`Search`}
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                prefix={
                  <div className="flex h-[16px] w-[14px] items-center justify-center">
                    {" "}
                    <Img
                      src="images/img_search_colors_white.svg"
                      alt="Search"
                      className="h-[14px] w-[14px] object-contain"
                    />{" "}
                  </div>
                }
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue("")}
                      height={14}
                      width={14}
                    />
                  ) : null
                }
                className="flex-grow gap-3 font-inter tracking-[-0.60px] !text-text_secondary"
              />{" "}
            </div>{" "}
            <div className="flex flex-wrap">
              {" "}
              <a href="#">
                {" "}
                <Img
                  src="images/img_bag_colors_white.svg"
                  alt="Bagone"
                  className="h-[20px]"
                />{" "}
              </a>{" "}
              <Text
                as="p"
                className="ml-1.5 text-[17px] font-normal tracking-[-0.60px] !text-colors-white"
              >
                {" "}
                3{" "}
              </Text>{" "}
              <Text
                as="p"
                className="ml-[22px] text-[17px] font-normal tracking-[-0.60px] !text-colors-white"
              >
                {" "}
                Login{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="h-px w-full self-stretch bg-white-a700_7f" />{" "}
      </div>{" "}
    </header>
  );
}
