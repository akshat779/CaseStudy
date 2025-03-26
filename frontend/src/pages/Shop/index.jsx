import { Helmet } from "react-helmet";
import { Button, Heading, CheckBox, Text, Img } from "../../components";
import Header from "../../components/Header";
import ProductDetails from "../../components/ProductDetails";
import React, { Suspense } from "react";
const data = [
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
];

const categories =[
  { 
    name:"sweatshirtshood",
    label:"Sweatshirts & Hoodies"
  },
  {
    name:"sweaters",
    label:"Sweaters"
  },
  {
    name:"shirts",
    label:"Shirts"
  },
  {
    name:"tshirts",
    label:"T-Shirts"
  },
  {
    name:"pantsjeans",
    label:"Pants & Jeans"
  },
  {
    name:"jackets",
    label:"Jackets"
  },
]
export default function ShopPage() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-[42px] bg-background_primary">
        <div className="flex flex-col items-center gap-[34px] self-stretch ">
          <Header className="self-stretch" />
          <div className="container-sm mb-[46px] px-1 md:px-5">
            {/* Top Heading */}
            <div className="flex flex-col items-start gap-2">
              <Heading
                size="heading2xl"
                as="h1"
                className="text-[36px] font-semibold tracking-[-1.08px] !text-colors-white md:text-[34px] sm:text-[32px]"
              >
                Shop Products !
              </Heading>
              <Text
                size="paragraph_02"
                as="p"
                className="w-[42%] text-[18px] font-normal leading-[26px] tracking-[-0.30px] !text-colors-white md:w-full"
              >
                Choose the Categories of Products that suits you the best.
              </Text>
            </div>
            {/* Top Heading Ends */}
          </div>
        </div>
        <div className="container-sm mb-1 md:px-5">
          <div>
            <div className="flex flex-col gap-[18px]">
              <div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start justify-center">
                    <div className="flex flex-1 flex-wrap items-center gap-[19px]">
                      <Heading
                        size="heading_04"
                        as="h2"
                        className="text-[22px] font-semibold tracking-[-0.55px]"
                      >
                        Filters
                      </Heading>
                      <Text
                        size="texts"
                        as="p"
                        className="self-end text-[14px] font-normal tracking-[-0.40px] !text-gray-400 underline"
                      >
                        Clear filters
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-end self-end border border-solid border-indigo-900 p-1.5">
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal tracking-[-0.30px] !text-black-900_7f"
                      >
                        Sort By
                      </Text>
                      <Heading
                        size="headingxs"
                        as="h3"
                        className="ml-2.5 !font-inter text-[14px] font-bold tracking-[-0.30px]"
                      >
                        Popular
                      </Heading>
                      <Img
                        src="images/img_arrow_down_text_primary.svg"
                        alt="Arrowdownone"
                        className="ml-1 h-[24px] self-center"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between gap-5">
                    <Heading
                      size="headingxs"
                      as="h4"
                      className="text-[14px] font-bold tracking-[-0.40px]"
                    >
                      Categories
                    </Heading>
                    <Text
                      size="paragraph_04"
                      as="p"
                      className="text-[14px] font-normal tracking-[-0.40px]"
                    >
                      Showing 1003 Products
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex items-start md:flex-col">
                <div className="flex w-[20%] flex-col gap-5 md:w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    {categories.map((category, index) => (
                      <CheckBox
                      name= {category.name}
                      label={category.label}
                      id={category.name}
                      key={"category" + index}
                      className="gap-3 pr-[34px] text-[13px] tracking-[-0.40px] text-text_primary sm:pr-5"
                    />
                    ))}
                    
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    
                  </div>
                </div>
                <div className="mt-1 flex flex-1 flex-col items-center gap-[42px] self-center md:self-stretch">
                  <div className="ml-11 grid grid-cols-3 gap-5 self-stretch md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <ProductDetails {...d} key={"productgrid" + index} />
                      ))}
                    </Suspense>
                  </div>
                  <Button
                    shape="square"
                    className="min-w-[298px] !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5"
                  >
                    Load more products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
