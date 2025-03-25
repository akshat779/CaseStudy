import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Switch,
  Input,
  SelectBox,
  Img,
  Heading,
} from "../../components";
import { CloseSVG } from "../../components/Input/close";
import ProductCard from "../../components/ProductCard";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function CheckoutPaymentPage() {
  const [searchBarValue17, setSearchBarValue17] = React.useState("");
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
                    value={searchBarValue17}
                    onChange={(e) => setSearchBarValue17(e.target.value)}
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
                      searchBarValue17?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue17("")}
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
            <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch">
              {" "}
              <Heading
                size="heading_03"
                as="h1"
                className="text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
              >
                {" "}
                Checkout{" "}
              </Heading>{" "}
              <div className="flex flex-col gap-[22px] self-stretch">
                {" "}
                <div className="flex flex-col gap-[26px]">
                  {" "}
                  <div className="flex items-center sm:flex-col">
                    {" "}
                    <Text
                      as="p"
                      className="text-[17px] font-normal tracking-[-0.40px]"
                    >
                      {" "}
                      Address{" "}
                    </Text>{" "}
                    <div className="ml-3.5 h-px w-[12%] bg-text_primary sm:ml-0" />{" "}
                    <Text
                      as="p"
                      className="ml-3.5 text-[17px] font-normal tracking-[-0.40px] sm:ml-0"
                    >
                      {" "}
                      Shipping{" "}
                    </Text>{" "}
                    <div className="ml-3.5 h-px w-[12%] bg-text_primary sm:ml-0" />{" "}
                    <Heading
                      size="headingmd"
                      as="h2"
                      className="ml-3.5 self-end text-[17px] font-bold tracking-[-0.40px] sm:ml-0"
                    >
                      {" "}
                      Payment{" "}
                    </Heading>{" "}
                  </div>{" "}
                  <div className="flex gap-[7px]">
                    {" "}
                    <div className="flex w-[24%] justify-center border border-solid border-blue-900 bg-colors-white p-2.5">
                      {" "}
                      <Img
                        src="images/img_paypal_1.png"
                        alt="Paypaloneone"
                        className="h-[16px] w-[46%] object-contain"
                      />{" "}
                    </div>{" "}
                    <div className="flex w-[24%] justify-center bg-gray-900 p-3">
                      {" "}
                      <Img
                        src="images/img_apple_pay_1.svg"
                        alt="Applepayoneone"
                        className="h-[14px]"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col items-start gap-6">
                  {" "}
                  <Text
                    size="paragraph_01"
                    as="p"
                    className="text-[20px] font-normal tracking-[-0.40px] !text-gray-900"
                  >
                    {" "}
                    Payment Details{" "}
                  </Text>{" "}
                  <div className="flex flex-col items-start gap-2.5 self-stretch">
                    {" "}
                    <Input
                      shape="square"
                      type="text"
                      name="name"
                      placeholder={`Cardholder Name`}
                      className="w-[60%] !border-[0.5px] px-4 tracking-[-0.30px]"
                    />{" "}
                    <Input
                      shape="square"
                      type="number"
                      name="cardNumber"
                      placeholder={`Card Number`}
                      className="w-[60%] !border-[0.5px] px-4 tracking-[-0.30px]"
                    />{" "}
                    <div className="flex self-stretch sm:flex-col">
                      {" "}
                      <SelectBox
                        shape="square"
                        indicator={
                          <Img
                            src="images/img_arrow_down_text_primary.svg"
                            alt="Arrow Down"
                            className="h-[22px] w-[24px]"
                          />
                        }
                        name="dropdowninput"
                        placeholder={`Month`}
                        options={dropDownOptions}
                        className="w-[20%] gap-7 !border-[0.5px] tracking-[-0.30px] sm:w-full"
                      />{" "}
                      <SelectBox
                        shape="square"
                        indicator={
                          <Img
                            src="images/img_arrow_down_text_primary.svg"
                            alt="Arrow Down"
                            className="h-[22px] w-[24px]"
                          />
                        }
                        name="dropdowninput"
                        placeholder={`Year`}
                        options={dropDownOptions}
                        className="ml-4 w-[20%] gap-7 !border-[0.5px] tracking-[-0.30px] sm:ml-0 sm:w-full"
                      />{" "}
                      <Input
                        shape="square"
                        name="inputone_one"
                        placeholder={`CVC`}
                        className="ml-3 w-[20%] !border-[0.5px] px-4 tracking-[-0.30px] sm:ml-0 sm:w-full"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-[141px] self-stretch">
                    {" "}
                    <Text
                      size="texts"
                      as="p"
                      className="text-[14px] font-normal tracking-[-0.30px]"
                    >
                      {" "}
                      Save card data for future payments{" "}
                    </Text>{" "}
                    <Switch value={true} />{" "}
                  </div>{" "}
                  <Button
                    variant="fill"
                    shape="square"
                    className="min-w-[396px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] sm:px-5"
                  >
                    {" "}
                    Pay with card{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
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
