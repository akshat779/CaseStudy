import { Helmet } from "react-helmet";
import { Heading, Input, Text } from "..";
import React from "react";
export default function FooterPage() {
  return (
    <>
      <footer className="flex w-full items-start justify-center bg-background_primary pt-11 md:pt-5 mt-4 ">
        <div className="container-sm mb-[78px] flex-col  justify-center md:px-5">
          {/* <header className="flex w-full items-start justify-between gap-5 px-1 md:flex-col"> */}
          {/* Newsletter Section */}
          <div className="flex w-[36%] flex-col items-center md:w-full">
            <div className="flex flex-col items-center gap-2">
              <Heading
                size="heading_03"
                as="h1"
                className="text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
              >
                Sign up for our newsletter
              </Heading>
              <Text
                size="texts"
                as="p"
                className="mt-2.5 w-full text-[14px] font-normal leading-4 tracking-[-0.30px]"
              >
                Be the first to know about our special offers, new product
                launches, and events, and get 10% off your first purchase.
              </Text>
            </div>

            <Input
              shape="square"
              type="email"
              name="email"
              placeholder={`Email Address`}
              className="mt-[22px] gap-7 self-stretch !border-[0.5px] pl-3.5 pr-2 tracking-[-0.30px]"
            />
          </div>
          {/* Newsletter End */}
          
            <ul className="flex flex-row items-start justify-evenly gap-5 mt-10 ">
              <li>
                <div className="flex flex-col items-start gap-5">
                  <a href="#">
                    <Heading
                      size="heading_05"
                      as="h6"
                      className="text-[16px] font-semibold tracking-[-0.40px] !text-colors-base-color_6"
                    >
                      Shop
                    </Heading>
                  </a>
                  <ul className="flex flex-col items-start gap-2">
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Women’s
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Men’s
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Kids’
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Shoes
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Equipment
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          By Activity
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Gift Cards
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Sale
                        </Heading>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="flex flex-col items-start gap-5">
                  <a href="#">
                    <Heading
                      size="heading_05"
                      as="h6"
                      className="text-[16px] font-semibold tracking-[-0.40px] !text-colors-base-color_6"
                    >
                      Help
                    </Heading>
                  </a>
                  <ul className="flex flex-col items-start gap-2">
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Help Center
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Order Status
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Size Chart
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Returns & Warranty
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Contact Us
                        </Heading>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="flex flex-col items-start gap-5">
                  <a href="#">
                    <Heading
                      size="heading_05"
                      as="h6"
                      className="text-[16px] font-semibold tracking-[-0.40px] !text-colors-base-color_6"
                    >
                      About
                    </Heading>
                  </a>
                  <ul className="flex flex-col items-start gap-2">
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          About Us
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Responsibility
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Technology & Innovation
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading
                          as="p"
                          className="text-[16px] font-medium tracking-[-0.20px] !text-gray-900_7f hover:font-semibold hover:!text-colors-base-color_6"
                        >
                          Explore our stories
                        </Heading>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          
          {/* </header> */}
        </div>
      </footer>
    </>
  );
}
