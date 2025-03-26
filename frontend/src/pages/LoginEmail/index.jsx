import { Text, Heading, CheckBox, Input, Button } from "../../components";
import FooterPage from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
export default function LoginEmailPage() {
  return (
    <>
      <Header />
      
      <div className="flex h-[calc(100vh-90px)] w-full justify-center items-center md:w-full border-[1px] border-black">
        <div className="flex  flex-col items-start gap-6 self bg-colors-white px-6 py-[30px] w-[30%] sm:p-5 border-[1px] border-black">
          <Heading
            size="heading_04"
            as="h1"
            className="ml-1 text-[22px] font-semibold tracking-[-0.55px] !text-colors-base-color_6 md:ml-0"
          >
            Welcome Back
          </Heading>
          <Heading
            as="h2"
            className="ml-1 text-[16px] font-medium tracking-[-0.20px] !text-colors-grey-grey_2 md:ml-0"
          >
            Login with email
          </Heading>
          <div className="mb-[22px] ml-1 flex flex-col gap-4 self-stretch md:ml-0">
            <div className="flex flex-col gap-4">
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder={`Email`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
              <Input
                shape="square"
                type="password"
                name="password"
                placeholder={`Password`}
                className="!border-[0.5px] px-4 tracking-[-0.30px]"
              />
            </div>
            <div className="flex items-center justify-between gap-5 my-4">
              <CheckBox
                size="sm"
                name="rememberme"
                label="Remember me"
                id="rememberme"
                className="gap-2.5 text-[14px] tracking-[-0.30px] text-text_secondary "
              />
              <a href="#">
                <Heading
                  size="headingxs"
                  as="h3"
                  className="text-[14px] font-bold tracking-[-0.30px] !text-text_secondary"
                >
                  Forgot Password?
                </Heading>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch">
          <Button
            shape="square"
            className="min-w-[30%] p-2 !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
          >
            Login
          </Button>
          
          <Button
            shape="square"
            className="min-w-[30%] p-2 !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
          >
            Sign Up
          </Button>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  );
}
