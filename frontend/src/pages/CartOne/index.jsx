import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Input } from "../../components";
import Header from "../../components/Header";
import ProductDetails1 from "../../components/ProductDetails1";

import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
const accordionData = [
  { titlethree: "Return Policy" },
  { titlethree: "Shipping Options" },
  { titlethree: "Shipping Options" },
];
export default function CartOnePage() {
  return (
    <>
      
      <div className="flex w-full flex-col items-center gap-[50px] bg-background_primary">
        <Header className="self-stretch bg-primary-0" />
        <div className="container-sm mb-1 md:px-5">
          <div>
            <div className="flex flex-col gap-[114px] md:gap-[85px] sm:gap-[57px]">
              <div className="flex items-center md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[18px] md:self-stretch">
                  <Heading
                    size="heading_03"
                    as="h1"
                    className="text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
                  >
                    Your cart
                  </Heading>
                  <Heading
                    as="h2"
                    className="text-[16px] font-medium tracking-[-0.20px] flex ml-2"
                  >
                    Not ready to checkout? <Link to="/shop"> <span className="font-bold ml-2">Continue Shopping</span></Link>
                  </Heading>

                    
                    <ProductDetails1 /> 
                    <ProductDetails1 />
                 
                </div>
                <div className="flex flex-col items-start gap-8 w-full   ">
                  <Heading
                    size="heading_04"
                    as="h3"
                    className="text-[22px] font-semibold tracking-[-0.55px]"
                  >
                    Order Summary
                  </Heading>
                  <Input
                    shape="square"
                    name="inputone_one"
                    placeholder={`Enter coupon code here`}
                    className="w-[84%] !border-[0.5px] px-4 tracking-[-0.30px]"
                  />
                  <div className="flex flex-col items-start gap-3 w-[500px]  py-8">
                    <div className="flex flex-wrap justify-between gap-5 self-stretch">
                      <Text
                        size="texts"
                        as="p"
                        className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                      >
                        Subtotal
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="mr-[68px] text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                      >
                        $200
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 self-stretch">
                      <Text
                        size="texts"
                        as="p"
                        className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                      >
                        Shipping
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="mr-[68px] text-[14px] font-normal tracking-[-0.30px] !text-primary-1"
                      >
                        Calculated at the next step
                      </Text>
                    </div>
                    <div className="h-px w-[86%] bg-text_primary" />
                    <div className="flex flex-wrap justify-between gap-5 self-stretch">
                      <Text
                        size="texts"
                        as="p"
                        className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                      >
                        Total
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="mr-[68px] text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                      >
                        $200
                      </Text>
                    </div>
                  </div>
                  <Button
                    variant="fill"
                    shape="square"
                    className="min-w-[440px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] py-2 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
                  >
                    Continue to checkout
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <Heading
                  size="heading_04"
                  as="h4"
                  className="text-[22px] font-semibold tracking-[-0.55px]"
                >
                  Order Information
                </Heading>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col gap-3.5 self-stretch py-3"
                >
                  {accordionData.map((d, i) => (
                    <AccordionItem uuid={i} key={`expandablelistt${i}`}>
                      <div className="flex flex-1 flex-col gap-2.5">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {(props) => (
                                <>
                                  <div className="flex flex-wrap items-center justify-between gap-5">
                                    <Heading
                                      size="heading_05"
                                      as="h5"
                                      className="text-[16px] font-semibold tracking-[-0.40px] !text-gray-500_01"
                                    >
                                      {d.titlethree}
                                    </Heading>
                                    {props?.expanded ? (
                                      <Img
                                        src="images/img_frame_gray_500_01.svg"
                                        alt="Image"
                                        className="mr-[548px] h-[12px] self-end"
                                      />
                                    ) : (
                                      <Img
                                        src="images/img_plus_gray_500_01.svg"
                                        alt="Plusone"
                                        className="mr-[548px] h-[12px]"
                                      />
                                    )}
                                  </div>
                                </>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="mb-3 flex">
                            <Text
                              size="textmd"
                              as="p"
                              className="w-[46%] text-[16px] font-normal leading-[22px] tracking-[-0.40px] !text-gray-500_01"
                            >
                              This is our example return policy which is
                              everything you need to know about our returns.
                            </Text>
                          </div>
                        </AccordionItemPanel>
                      </div>
                      <div className="h-px w-[52%] rotate-[0deg] bg-text_primary" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
