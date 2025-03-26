import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import HerooneRowOne from "./HerooneRowOne";
import React from "react";
import Header from "../../components/Header";
import FooterPage from "../../components/Footer";
import { Link } from "react-router-dom";
export default function HeroOnePage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  return (
    <>
      <Helmet>
        <title>BeeCommerce</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header />
      <div className="flex w-full flex-col gap-10 bg-background_primary mt-10">
        <div className="flex flex-col items-center gap-[66px] sm:gap-[33px]">
          <div className="flex w-[50%] flex-col items-center md:w-full md:px-5 gap-2">
            <Heading
              size="heading_02"
              as="h1"
              className="text-[56px] font-semibold tracking-[-2.40px] md:text-[48px] sm:text-[42px]"
            >
              Better Commerce for you! & the planet
            </Heading>
            <Text
              size="paragraph_01"
              as="p"
              className="mt-3 self-stretch text-center text-[20px] font-normal leading-7 tracking-[-0.40px] !text-text_secondary"
            >
              Choose from a wide Array of Products, clothes, accessories and more 
            </Text>
            <Link to="/shop">
            <Button
              shape="square"
              className="min-w-[194px] !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 p-2 hover:font-bold mt-6"
            >
              
              Shop All
            </Button>
            </Link>
          </div>
        </div>
        <HerooneRowOne />
      </div >
      <FooterPage />
    </>
  );
}
