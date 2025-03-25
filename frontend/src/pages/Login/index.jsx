import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import React from "react";
export default function LoginPage() {
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
          <div className="flex w-[44%] flex-col items-center gap-7 md:w-full">
            {" "}
            <div className="flex flex-col items-start gap-3.5 self-stretch bg-colors-white p-[30px] sm:p-5">
              {" "}
              <Heading
                size="heading_04"
                as="h1"
                className="text-[22px] font-semibold tracking-[-0.55px] !text-colors-base-color_6"
              >
                {" "}
                Welcome Back{" "}
              </Heading>{" "}
              <Heading
                as="h2"
                className="text-[16px] font-medium tracking-[-0.20px] !text-colors-grey-grey_2"
              >
                {" "}
                Login to continue{" "}
              </Heading>{" "}
              <div className="mb-2.5 mr-2 flex flex-col gap-2.5 self-stretch md:mr-0">
                {" "}
                <Button
                  color="colors_white"
                  variant="fill"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_facebook.svg"
                      alt="Facebook"
                      className="h-[24px] w-[24px] object-contain"
                    />
                  }
                  className="gap-1.5 self-stretch rounded-[5px] border border-colors-grey-grey_4 px-[33px] tracking-[-0.40px] sm:px-5"
                >
                  {" "}
                  Continue with Facebook{" "}
                </Button>{" "}
                <Button
                  color="colors_white"
                  variant="fill"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_clock.svg"
                      alt="Clock"
                      className="h-[24px] w-[24px] object-contain"
                    />
                  }
                  className="gap-1.5 self-stretch rounded-[5px] border border-colors-grey-grey_4 px-[33px] tracking-[-0.40px] sm:px-5"
                >
                  {" "}
                  Continue with Google{" "}
                </Button>{" "}
                <Button
                  color="colors_white"
                  variant="fill"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_frame_text_primary.svg"
                      alt="Frame"
                      className="h-[16px] w-[20px] object-contain"
                    />
                  }
                  className="gap-1.5 self-stretch rounded-[5px] border border-colors-grey-grey_4 px-[33px] tracking-[-0.40px] sm:px-5"
                >
                  {" "}
                  Continue with Email{" "}
                </Button>{" "}
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
