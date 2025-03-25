import { Helmet } from "react-helmet";
import {
  Text,
  Input,
  Button,
  CheckBox,
  SelectBox,
  Img,
  Heading,
} from "../../components";
import { Helmet } from "react-helmet";
import {
  Text,
  Input,
  Button,
  CheckBox,
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

export default function CheckoutAddressPage() {
  const [searchBarValue12, setSearchBarValue12] = React.useState("");
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
                    value={searchBarValue12}
                    onChange={(e) => setSearchBarValue12(e.target.value)}
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
                      searchBarValue12?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue12("")}
                          height={14}
                          width={14}
                        />
                      ) : null
                    }
                    className="flex-grow gap-3 font-inter tracking-[-0.60px] text-text_secondary"
                  />{" "}
                </div>{" "}
                <div className="flex gap-1.5">
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
        <div className="container-sm mb-[194px] md:px-5">
          {" "}
          <div className="flex items-center md:flex-col">
            {" "}
            <div className="mb-4 flex flex-1 flex-col items-start md:self-stretch">
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
                <Heading
                  size="headingmd"
                  as="h2"
                  className="text-[17px] font-bold tracking-[-0.40px]"
                >
                  {" "}
                  Address{" "}
                </Heading>{" "}
                <div className="ml-3.5 h-px w-[12%] bg-text_primary sm:ml-0" />{" "}
                <Text
                  as="p"
                  className="ml-3.5 text-[17px] font-normal tracking-[-0.40px] sm:ml-0"
                >
                  {" "}
                  Shipping{" "}
                </Text>{" "}
                <div className="ml-3.5 h-px w-[12%] bg-text_primary sm:ml-0" />{" "}
                <Text
                  as="p"
                  className="ml-3.5 self-end text-[17px] font-normal tracking-[-0.40px] sm:ml-0"
                >
                  {" "}
                  Payment{" "}
                </Text>{" "}
              </div>
              <Text
                size="paragraph_01"
                as="p"
                className="ml-1 mt-9 text-[20px] font-normal tracking-[-0.40px] !text-gray-900 md:ml-0"
              >
                {" "}
                Shipping Information{" "}
              </Text>{" "}
              <div className="mt-4 flex flex-col items-start gap-6 self-stretch">
                {" "}
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  {" "}
                  <div className="flex gap-2 self-stretch sm:flex-col">
                    {" "}
                    <Input
                      shape="square"
                      type="text"
                      name="firstName"
                      placeholder={`First Name`}
                      className="w-[30%] !border-[0.5px] px-4 tracking-[-0.30px] sm:w-full"
                    />{" "}
                    <Input
                      shape="square"
                      type="text"
                      name="lastName"
                      placeholder={`Last Name`}
                      className="w-[30%] !border-[0.5px] px-4 tracking-[-0.30px] sm:w-full"
                    />{" "}
                  </div>{" "}
                  <Input
                    shape="square"
                    name="address"
                    placeholder={`Address`}
                    className="w-[62%] !border-[0.5px] px-4 tracking-[-0.30px]"
                  />{" "}
                  <Input
                    shape="square"
                    name="inputone_one"
                    placeholder={`Apartment, suite, etc (optional)`}
                    className="w-[62%] !border-[0.5px] px-4 tracking-[-0.30px]"
                  />{" "}
                  <Input
                    shape="square"
                    name="city"
                    placeholder={`City`}
                    className="w-[62%] !border-[0.5px] px-4 tracking-[-0.30px]"
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
                      name="country"
                      placeholder={`Country`}
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
                      name="city"
                      placeholder={`City`}
                      options={dropDownOptions}
                      className="ml-4 w-[20%] gap-7 !border-[0.5px] tracking-[-0.30px] sm:ml-0 sm:w-full"
                    />{" "}
                    <Input
                      shape="square"
                      type="number"
                      name="zipcode"
                      placeholder={`Zipcode`}
                      className="ml-3 w-[20%] !border-[0.5px] px-4 tracking-[-0.30px] sm:ml-0 sm:w-full"
                    />{" "}
                  </div>{" "}
                  <Input
                    shape="square"
                    name="inputthree_one"
                    placeholder={`Optional`}
                    className="w-[62%] !border-[0.5px] px-4 tracking-[-0.30px]"
                  />{" "}
                </div>{" "}
                <CheckBox
                  name="checkbox_off"
                  label="Save contact information"
                  id="checkboxoff"
                  className="gap-2.5 text-[14px] tracking-[-0.30px] text-text_secondary"
                />{" "}
                <Button
                  variant="fill"
                  shape="square"
                  className="min-w-[396px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] sm:px-5"
                >
                  {" "}
                  Continue to shipping{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex w-[42%] flex-col items-start gap-[26px] self-end md:w-full">
              {" "}
              <Text
                size="paragraph_01"
                as="p"
                className="text-[20px] font-normal tracking-[-0.40px] !text-gray-900"
              >
                {" "}
                Your cart{" "}
              </Text>{" "}
              <div className="flex flex-col items-start gap-6 self-stretch">
                {" "}
                <div className="mr-[66px] flex flex-col gap-4 self-stretch md:mr-0">
                  {" "}
                  <ProductCard /> <ProductCard />{" "}
                </div>{" "}
                <Input
                  shape="square"
                  name="inputfive_one"
                  placeholder={`Enter coupon code here`}
                  className="w-[84%] !border-[0.5px] px-4 tracking-[-0.30px]"
                />{" "}
                <div className="flex flex-col gap-3 self-stretch">
                  {" "}
                  <div className="flex flex-col gap-3.5">
                    {" "}
                    <div className="flex flex-wrap justify-between gap-5">
                      {" "}
                      <Text
                        size="texts"
                        as="p"
                        className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                      >
                        {" "}
                        Subtotal{" "}
                      </Text>{" "}
                      <Text
                        size="texts"
                        as="p"
                        className="mr-[66px] text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                      >
                        {" "}
                        $200{" "}
                      </Text>{" "}
                    </div>{" "}
                    <div className="flex flex-col items-start gap-3">
                      {" "}
                      <div className="flex flex-wrap justify-between gap-5 self-stretch">
                        {" "}
                        <Text
                          size="texts"
                          as="p"
                          className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                        >
                          {" "}
                          Shipping{" "}
                        </Text>{" "}
                        <Text
                          size="texts"
                          as="p"
                          className="mr-[66px] text-[14px] font-normal tracking-[-0.30px] !text-primary-1"
                        >
                          {" "}
                          Calculated at the next step{" "}
                        </Text>{" "}
                      </div>{" "}
                      <div className="h-px w-[86%] bg-text_primary" />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex flex-wrap justify-between gap-5">
                    {" "}
                    <Text
                      size="texts"
                      as="p"
                      className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                    >
                      {" "}
                      Total{" "}
                    </Text>{" "}
                    <Text
                      size="texts"
                      as="p"
                      className="mr-[66px] text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                    >
                      {" "}
                      $200{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
