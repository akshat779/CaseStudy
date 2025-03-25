import { Helmet } from "react-helmet";
import { Text, Button, Heading, Img, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import ProductCard from "../../components/ProductCard";
import React from "react";
export default function CheckoutShippingPage() {
  const [searchBarValue13, setSearchBarValue13] = React.useState("");
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
      <div className="flex w-full flex-col items-center gap-[50px] bg-background_primary">
        {" "}
        <header className="self-stretch bg-primary-0">
          {" "}
          <div className="mt-3.5 flex flex-col items-center gap-4">
            {" "}
            <div className="container-sm md:px-5">
              {" "}
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                {" "}
                <div className="flex w-[48%] items-center justify-center gap-8 sm:w-full sm:flex-col">
                  {" "}
                  <Img
                    src="images/img_header_logo.png"
                    alt="Headerlogoone"
                    className="h-[28px] w-[112px] object-contain"
                  />{" "}
                  <Input
                    size="xs"
                    shape="square"
                    name="search"
                    placeholder={`Search`}
                    value={searchBarValue13}
                    onChange={(e) => setSearchBarValue13(e.target.value)}
                    prefix={
                      <div className="flex h-[16px] w-[14px] items-center justify-center">
                        {" "}
                        <Img
                          src="images/img_search.svg"
                          alt="Search"
                          className="h-[14px] w-[14px] object-contain"
                        />{" "}
                      </div>
                    }
                    suffix={
                      searchBarValue13?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue13("")}
                          height={14}
                          width={14}
                        />
                      ) : null
                    }
                    className="flex-grow gap-3 font-inter tracking-[-0.60px] text-text_secondary"
                  />{" "}
                </div>{" "}
                <div className="flex gap-1.5">
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
                    className="text-[17px] font-normal tracking-[-0.60px] !text-colors-white"
                  >
                    {" "}
                    3{" "}
                  </Text>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="h-px w-full self-stretch bg-white-a700_7f" />{" "}
          </div>{" "}
        </header>{" "}
        <div className="container-sm mb-1 md:px-5">
          {" "}
          <div className="flex items-center md:flex-col">
            {" "}
            <div className="flex flex-1 flex-col items-start md:self-stretch">
              {" "}
              <Heading
                size="heading_03"
                as="h1"
                className="text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
              >
                {" "}
                Checkout{" "}
              </Heading>{" "}
              <div className="mt-3 flex items-center self-stretch sm:flex-col">
                {" "}
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.40px]"
                >
                  {" "}
                  Address{" "}
                </Text>{" "}
                <div className="ml-3.5 h-px w-[12%] bg-text_primary sm:ml-0" />{" "}
                <Heading
                  size="headingmd"
                  as="h2"
                  className="ml-3.5 text-[17px] font-bold tracking-[-0.40px] sm:ml-0"
                >
                  {" "}
                  Shipping{" "}
                </Heading>{" "}
                <div className="ml-3.5 h-px w-[12%] bg-text_primary sm:ml-0" />{" "}
                <Text
                  as="p"
                  className="ml-3.5 self-end text-[17px] font-normal tracking-[-0.40px] sm:ml-0"
                >
                  {" "}
                  Payment{" "}
                </Text>{" "}
              </div>{" "}
              <div className="mt-9 flex flex-col items-start gap-[18px] self-stretch">
                {" "}
                <div className="flex w-[60%] rounded-[10px] border-2 border-solid border-text_primary bg-colors-white md:w-full">
                  {" "}
                  <div className="flex w-full items-start justify-center gap-4 border-2 border-solid border-text_primary bg-colors-white p-4">
                    {" "}
                    <Img
                      src="images/img_checkmark.svg"
                      alt="Checkmarkone"
                      className="mt-2 h-[18px]"
                    />{" "}
                    <div className="mt-1.5 flex flex-1 flex-col items-start gap-2.5 self-end">
                      {" "}
                      <Heading
                        size="headings"
                        as="h3"
                        className="text-[16px] font-bold tracking-[-0.36px] !text-colors-base-color_6"
                      >
                        {" "}
                        UPS/USPS Surepost{" "}
                      </Heading>{" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[16px] font-normal tracking-[-0.36px]"
                      >
                        {" "}
                        4-7 Business Days{" "}
                      </Text>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex w-[60%] flex-col items-start gap-2 bg-colors-white px-[18px] py-4 md:w-full">
                  {" "}
                  <div className="mt-1.5 flex gap-[17px] self-stretch">
                    {" "}
                    <div className="h-[18px] w-[20px] border border-solid border-primary-0" />{" "}
                    <Heading
                      size="headings"
                      as="h4"
                      className="text-[16px] font-bold tracking-[-0.36px] !text-colors-base-color_6"
                    >
                      {" "}
                      UPS Ground Shipping{" "}
                    </Heading>{" "}
                  </div>{" "}
                  <Text
                    size="textmd"
                    as="p"
                    className="ml-9 text-[16px] font-normal tracking-[-0.36px] md:ml-0"
                  >
                    {" "}
                    3-5 Business Days{" "}
                  </Text>{" "}
                </div>{" "}
              </div>{" "}
              <Button
                variant="fill"
                shape="square"
                className="mt-[118px] min-w-[396px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] sm:px-5"
              >
                {" "}
                Continue to payment{" "}
              </Button>{" "}
            </div>{" "}
            <div className="mb-[34px] flex w-[42%] flex-col items-start gap-[26px] self-end md:w-full">
              {" "}
              <Text
                size="paragraph_01"
                as="p"
                className="text-[20px] font-normal tracking-[-0.40px] !text-gray-900"
              >
                {" "}
                Your cart{" "}
              </Text>{" "}
              <div className="mr-[66px] flex flex-col gap-4 self-stretch md:mr-0">
                {" "}
                <ProductCard
                  productTitle="Men’s winter jacket"
                  productSize="Size: L"
                  productQuantity="Quantity: 1"
                  productPrice="$99"
                  removeButtonText="Remove"
                />{" "}
                <ProductCard />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
