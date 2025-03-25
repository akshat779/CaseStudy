import { Helmet } from "react-helmet";
import { Text, Heading, CheckBox, Input } from "../../components";
import Header from "../../components/Header";
import React from "react";
export default function LoginEmailPage() {
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
      <div className="flex w-full flex-col items-center gap-24 bg-background_primary md:gap-[72px] sm:gap-12">
        {" "}
        <Header className="self-stretch bg-text_primary" />{" "}
        <div className="container-sm mb-1 flex flex-col items-center px-14 md:px-5">
          {" "}
          <div className="flex w-[44%] flex-col items-center gap-[26px] md:w-full">
            {" "}
            <div className="flex flex-col items-start gap-3 self-stretch bg-colors-white px-6 py-[30px] sm:p-5">
              {" "}
              <Heading
                size="heading_04"
                as="h1"
                className="ml-1 text-[22px] font-semibold tracking-[-0.55px] !text-colors-base-color_6 md:ml-0"
              >
                {" "}
                Welcome Back{" "}
              </Heading>{" "}
              <Heading
                as="h2"
                className="ml-1 text-[16px] font-medium tracking-[-0.20px] !text-colors-grey-grey_2 md:ml-0"
              >
                {" "}
                Login with email{" "}
              </Heading>{" "}
              <div className="mb-[22px] ml-1 flex flex-col gap-4 self-stretch md:ml-0">
                {" "}
                <div className="flex flex-col gap-2.5">
                  {" "}
                  <Input
                    shape="square"
                    type="email"
                    name="email"
                    placeholder={`Email`}
                    className="!border-[0.5px] px-4 tracking-[-0.30px]"
                  />{" "}
                  <Input
                    shape="square"
                    type="password"
                    name="password"
                    placeholder={`Password`}
                    className="!border-[0.5px] px-4 tracking-[-0.30px]"
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between gap-5">
                  {" "}
                  <CheckBox
                    size="sm"
                    name="rememberme"
                    label="Remember me"
                    id="rememberme"
                    className="gap-2.5 text-[14px] tracking-[-0.30px] text-text_secondary"
                  />{" "}
                  <a href="#">
                    {" "}
                    <Heading
                      size="headingxs"
                      as="h3"
                      className="text-[14px] font-bold tracking-[-0.30px] !text-text_secondary"
                    >
                      {" "}
                      Forgot Password?{" "}
                    </Heading>{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <Text
              size="buttons_small"
              as="p"
              className="!font-poppins text-[14px] font-normal tracking-[-0.30px] !text-colors-grey-grey_2"
            >
              {" "}
              <span>lbl_or_create_an</span>{" "}
              <span className="font-bold">lbl_account</span>{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
