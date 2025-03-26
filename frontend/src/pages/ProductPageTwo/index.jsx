import { Helmet } from "react-helmet";
import { Button, Text, SelectBox, Img, Heading } from "../../components";
import Header from "../../components/Header";
import ProductpagetwoColumnslider from "./ProductpagetwoColumnslider";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ProductPageTwoPage() {
  const [quantity, setQuantity] = React.useState(1);
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
      <div className="flex w-full flex-col gap-[88px] bg-background_primary md:gap-[66px] sm:gap-11">
        {" "}
        <Header className="bg-primary-0" />{" "}
        <div className="mx-[110px] mb-1 md:mx-0">
          {" "}
          <div className="flex items-start md:flex-col">
            {" "}
            <div className="relative h-[548px] w-[56%] content-center self-center md:h-auto md:w-full md:px-5">
              {" "}
              <ProductpagetwoColumnslider />{" "}
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[70%] items-center justify-end">
                {" "}
                <Img
                  src="images/img_frame_text_primary_100x100.svg"
                  alt="Image"
                  className="relative z-[1] h-[100px] w-[18%] object-contain"
                />{" "}
                <div className="relative ml-[-70px] h-[548px] w-[12%] bg-gray-400" />{" "}
              </div>{" "}
            </div>
            <div className="flex w-[44%] flex-col items-start md:w-full md:px-5">
              {" "}
              <div className="flex flex-col items-start self-stretch">
                {" "}
                <Heading
                  size="heading2xl"
                  as="h1"
                  className="text-[36px] font-semibold tracking-[-1.08px] md:text-[34px] sm:text-[32px]"
                >
                  {" "}
                  Men’s winter jacket{" "}
                </Heading>{" "}
                <Text
                  size="textxl"
                  as="p"
                  className="text-[24px] font-normal tracking-[-0.72px] md:text-[22px]"
                >
                  {" "}
                  $99{" "}
                </Text>{" "}
              </div>{" "}
              <Text
                as="p"
                className="mt-4 w-[68%] text-[17px] font-normal leading-6 tracking-[-0.51px] md:w-full"
              >
                {" "}
                Revamp your style with the latest designer trends in men’s
                clothing or achieve a perfectly curated wardrobe thanks to our
                line-up of timeless pieces.{" "}
              </Text>{" "}
              <div className="mt-3.5 flex gap-4 self-stretch">
                {" "}
                <div className="flex w-[32%] items-center justify-between gap-5 border border-solid border-text_primary px-2.5 py-3">
                  {" "}
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      setQuantity((quantity) =>
                        quantity < 1 ? 0 : quantity - 1
                      );
                    }}
                    className="flex cursor-pointer flex-col"
                  >
                    {" "}
                    <Img
                      src="images/img_arrow_down.svg"
                      alt="Arrowdownone"
                      className="h-[20px]"
                    />{" "}
                  </div>{" "}
                  <Text
                    size="paragraph_02"
                    as="p"
                    className="text-[18px] font-normal tracking-[-0.30px] !text-primary-0"
                  >
                    {" "}
                    {quantity}{" "}
                  </Text>{" "}
                  <Img
                    src="images/img_plus.svg"
                    alt="Plusone"
                    className="h-[20px]"
                  />{" "}
                </div>{" "}
                <SelectBox
                  color="indigo_900"
                  size="sm"
                  shape="square"
                  indicator={
                    <Img
                      src="images/img_arrowdown_primary_0.svg"
                      alt="Arrow Down"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  name="dropdownone_one"
                  placeholder={`XL`}
                  options={dropDownOptions}
                  className="w-[32%] gap-4 !border px-3.5 font-inter tracking-[-0.30px]"
                />{" "}
              </div>{" "}
              <Text
                size="paragraph_04"
                as="p"
                className="mt-4 text-[14px] font-normal tracking-[-0.40px] !text-black-900_7f"
              >
                {" "}
                Height of model: 189 cm. / 6′ 2″ Size 41{" "}
              </Text>{" "}
              <div className="mt-[22px] flex gap-[13px] self-stretch">
                {" "}
                <Button
                  variant="fill"
                  shape="square"
                  className="min-w-[198px] border-[0.5px] border-primary-0 px-8 font-semibold tracking-[-0.40px] sm:px-5"
                >
                  {" "}
                  Add to Cart - $250{" "}
                </Button>{" "}
                <Button
                  color="blue_A400"
                  variant="fill"
                  shape="square"
                  className="min-w-[138px] border-[0.5px] border-blue-a400 px-[34px] font-semibold tracking-[-0.40px] sm:px-5"
                >
                  {" "}
                  Buy Now{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
