import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import ProductoneProductone from "./ProductoneProductone";
import React from "react";
export default function ProductOnePage() {
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
      <div className="flex w-full flex-col gap-[78px] bg-background_primary md:gap-[58px] sm:gap-[39px]">
        {" "}
        <Header className="bg-primary-0" />{" "}
        <div className="mx-[110px] mb-1 flex items-center md:mx-0 md:flex-col">
          {" "}
          <ProductoneProductone />{" "}
          <div className="flex flex-1 flex-col items-center px-14 md:self-stretch md:px-5">
            {" "}
            <div className="mr-2 flex w-[92%] flex-col items-start md:mr-0 md:w-full">
              {" "}
              <div className="flex flex-wrap items-end self-stretch sm:flex-col">
                {" "}
                <Heading
                  size="heading_03"
                  as="h1"
                  className="self-center text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
                >
                  {" "}
                  Men’s winter jacket{" "}
                </Heading>{" "}
                <Img
                  src="images/img_favorite.svg"
                  alt="Favoriteone"
                  className="mb-1.5 ml-5 h-[24px] sm:ml-0 sm:w-full"
                />{" "}
                <Img
                  src="images/img_frame.svg"
                  alt="Image"
                  className="ml-2 h-[32px] sm:ml-0 sm:w-full"
                />{" "}
              </div>{" "}
              <div className="mt-1 flex items-center gap-3.5 self-stretch">
                {" "}
                <Text
                  size="paragraph_02"
                  as="p"
                  className="text-[18px] font-normal tracking-[-0.30px]"
                >
                  {" "}
                  $99{" "}
                </Text>{" "}
                <div className="h-[28px] w-[66%] border border-solid border-black-900_4c" />{" "}
              </div>{" "}
              <Text
                size="paragraph_02"
                as="p"
                className="mt-[22px] w-[76%] text-[18px] font-normal leading-[26px] tracking-[-0.30px] md:w-full"
              >
                {" "}
                Revamp your style with the latest designer trends in men’s
                clothing or achieve a perfectly curated wardrobe thanks to our
                line-up of timeless pieces.{" "}
              </Text>{" "}
              <Text
                size="paragraph_02"
                as="p"
                className="mt-1.5 text-[18px] font-normal tracking-[-0.30px] !text-black-900_7f"
              >
                {" "}
                Color{" "}
              </Text>{" "}
              <div className="mt-2.5 flex gap-[9px] self-stretch">
                {" "}
                <div className="h-[50px] w-[50px] rounded-[24px] border-[0.5px] border-solid border-primary-0 bg-deep_orange-300" />{" "}
                <div className="h-[50px] w-[50px] rounded-[24px] border-[0.5px] border-solid border-primary-0 bg-text_primary" />{" "}
              </div>{" "}
              <div className="mt-3 flex flex-col items-start gap-2.5 self-stretch">
                {" "}
                <Text
                  size="paragraph_02"
                  as="p"
                  className="text-[18px] font-normal tracking-[-0.30px] !text-black-900_7f"
                >
                  {" "}
                  Size{" "}
                </Text>{" "}
                <div className="flex gap-1 self-stretch sm:flex-col">
                  {" "}
                  <div className="w-[10%] sm:w-full">
                    {" "}
                    <Button
                      shape="square"
                      className="self-stretch !border-[0.5px] px-3.5 font-semibold tracking-[-0.40px]"
                    >
                      {" "}
                      XS{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="w-[12%] sm:w-full">
                    {" "}
                    <Button
                      shape="square"
                      className="self-stretch !border-[0.5px] px-[18px] font-semibold tracking-[-0.40px]"
                    >
                      {" "}
                      S{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="w-[12%] sm:w-full">
                    {" "}
                    <Button
                      shape="square"
                      className="self-stretch !border-[0.5px] px-4 font-semibold tracking-[-0.40px]"
                    >
                      {" "}
                      M{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="w-[12%] sm:w-full">
                    {" "}
                    <Button
                      shape="square"
                      className="self-stretch !border-[0.5px] px-5 font-semibold tracking-[-0.40px]"
                    >
                      {" "}
                      L{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="w-[12%] sm:w-full">
                    {" "}
                    <Button
                      shape="square"
                      className="self-stretch !border-[0.5px] px-3.5 font-semibold tracking-[-0.40px]"
                    >
                      {" "}
                      XL{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="w-[12%] sm:w-full">
                    {" "}
                    <Button
                      shape="square"
                      className="self-stretch !border-[0.5px] px-2 font-semibold tracking-[-0.40px]"
                    >
                      {" "}
                      XXL{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="flex flex-1 flex-col items-start sm:self-stretch">
                    {" "}
                    <Button
                      shape="square"
                      className="min-w-[50px] !border-[0.5px] px-2 font-semibold tracking-[-0.40px]"
                    >
                      {" "}
                      3XL{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-8 flex items-center gap-[18px] self-stretch sm:flex-col">
                {" "}
                <div className="flex flex-1 flex-col items-start gap-3.5 sm:self-stretch">
                  {" "}
                  <Text
                    size="textxs"
                    as="p"
                    className="text-[13px] font-normal tracking-[-0.30px] underline"
                  >
                    {" "}
                    Size & Fit Guide{" "}
                  </Text>{" "}
                  <Text
                    size="paragraph_04"
                    as="p"
                    className="text-[14px] font-normal tracking-[-0.40px] !text-black-900_7f"
                  >
                    {" "}
                    Height of model: 189 cm. / 6′ 2″ Size 41{" "}
                  </Text>{" "}
                  <Button
                    variant="fill"
                    shape="square"
                    className="self-stretch border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] sm:px-5"
                  >
                    {" "}
                    Add to Cart - $250{" "}
                  </Button>{" "}
                  <div className="flex flex-wrap gap-[23px] self-stretch">
                    {" "}
                    <Text
                      size="paragraph_04"
                      as="p"
                      className="text-[14px] font-normal tracking-[-0.40px] !text-black-900_7f"
                    >
                      {" "}
                      Free standard shipping{" "}
                    </Text>{" "}
                    <Text
                      size="texts"
                      as="p"
                      className="text-[14px] font-normal tracking-[-0.40px] !text-black-900_7f underline"
                    >
                      {" "}
                      Free Returns{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex w-[22%] flex-col items-start gap-1.5 sm:w-full">
                  {" "}
                  <Text
                    size="paragraph_02"
                    as="p"
                    className="text-[18px] font-normal tracking-[-0.30px] !text-black-900_7f"
                  >
                    {" "}
                    Quantity{" "}
                  </Text>{" "}
                  <div className="flex items-center justify-center gap-3.5 self-stretch border border-solid border-text_primary px-2.5 py-3">
                    {" "}
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        setQuantity((quantity) =>
                          quantity < 1 ? 0 : quantity - 1
                        );
                      }}
                      className="flex-1 cursor-pointer"
                    >
                      {" "}
                      <Img
                        src="images/img_arrow_down.svg"
                        alt="Arrowdownone"
                        className="h-[20px] w-full md:h-auto"
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
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
