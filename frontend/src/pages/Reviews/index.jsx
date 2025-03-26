import { Helmet } from "react-helmet";
import { Heading, Img, RatingBar } from "../../components";
import Header from "../../components/Header";
import ProductReview from "../../components/ProductReview";
import React from "react";
export default function ReviewsPage() {
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
        <Header className="self-stretch bg-text_primary" />{" "}
        <div className="container-sm mb-1 md:px-5">
          {" "}
          <div className="flex flex-col items-start">
            {" "}
            <Heading
              size="heading_03"
              as="h1"
              className="text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
            >
              {" "}
              Reviews{" "}
            </Heading>{" "}
            <RatingBar
              value={1}
              isEditable={true}
              size={32}
              className="mt-11 flex gap-2.5"
            />{" "}
            <div className="mt-[18px] flex flex-col items-end gap-[38px] self-stretch">
              {" "}
              <div className="self-stretch">
                {" "}
                <div className="flex items-start justify-end md:flex-col">
                  {" "}
                  <div className="flex w-[26%] flex-col items-start md:w-full">
                    {" "}
                    <Heading
                      size="headingxl"
                      as="h2"
                      className="text-[24px] font-semibold tracking-[-0.60px] md:text-[22px]"
                    >
                      {" "}
                      5 reviews{" "}
                    </Heading>{" "}
                    <div className="mt-[26px] flex gap-[13px] self-stretch">
                      {" "}
                      <Heading
                        size="headingmd"
                        as="h3"
                        className="text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        5 stars{" "}
                      </Heading>{" "}
                      <Img
                        src="images/img_television.svg"
                        alt="Televisionone"
                        className="h-[20px] w-[34%] object-contain"
                      />{" "}
                      <Heading
                        size="headingmd"
                        as="h4"
                        className="text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        (5){" "}
                      </Heading>{" "}
                    </div>{" "}
                    <div className="mt-3.5 flex self-stretch">
                      {" "}
                      <Heading
                        size="headingmd"
                        as="h5"
                        className="text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        4 stars{" "}
                      </Heading>{" "}
                      <Img
                        src="images/img_television_text_primary.svg"
                        alt="Television"
                        className="ml-3 h-[20px] w-[34%] object-contain"
                      />{" "}
                      <Heading
                        size="headingmd"
                        as="h6"
                        className="ml-3 text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        (1){" "}
                      </Heading>{" "}
                    </div>{" "}
                    <div className="mt-3 flex self-stretch">
                      {" "}
                      <Heading
                        size="headingmd"
                        as="h6"
                        className="text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        3 stars{" "}
                      </Heading>{" "}
                      <Img
                        src="images/img_television.svg"
                        alt="Televisionfive"
                        className="ml-3 h-[20px] w-[34%] object-contain"
                      />{" "}
                      <Heading
                        size="headingmd"
                        as="h6"
                        className="ml-3 text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        (0){" "}
                      </Heading>{" "}
                    </div>{" "}
                    <div className="mt-3 flex self-stretch">
                      {" "}
                      <Heading
                        size="headingmd"
                        as="h6"
                        className="text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        2 stars{" "}
                      </Heading>{" "}
                      <Img
                        src="images/img_television.svg"
                        alt="Television"
                        className="ml-3 h-[20px] w-[34%] object-contain"
                      />{" "}
                      <Heading
                        size="headingmd"
                        as="h6"
                        className="ml-3 text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        (0){" "}
                      </Heading>{" "}
                    </div>{" "}
                    <div className="mt-3 flex gap-[13px] self-stretch">
                      {" "}
                      <Heading
                        size="headingmd"
                        as="h6"
                        className="text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        1 stars{" "}
                      </Heading>{" "}
                      <Img
                        src="images/img_television.svg"
                        alt="Televisionnine"
                        className="h-[20px] w-[36%] object-contain"
                      />{" "}
                      <Heading
                        size="headingmd"
                        as="h6"
                        className="text-[17px] font-semibold tracking-[-0.60px]"
                      >
                        {" "}
                        (0){" "}
                      </Heading>{" "}
                    </div>{" "}
                  </div>{" "}
                  <ProductReview className="flex-1 self-center md:self-stretch" />{" "}
                </div>{" "}
              </div>{" "}
              <ProductReview
                reviewDescription="Have been buying the Denali since the first ones, and personally own 3. I want A new one, white with the gray in xxl. Not interested in cream and black. Pluck the length is shorter."
                className="w-[74%] md:w-full"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
