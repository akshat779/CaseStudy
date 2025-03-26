import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import EcommerceHeader1 from "../../components/EcommerceHeader1";
import React from "react";
export default function SimpleOnePage() {
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
      <div className="flex w-full flex-col items-start justify-center gap-[46px] bg-background_primary py-[62px] pl-[92px] pr-14 lg:py-8 lg:pl-8 md:p-5 sm:p-4">
        {" "}
        <Heading
          size="heading_01"
          as="h1"
          className="text-[72px] font-semibold tracking-[-2.16px] lg:text-[48px] md:text-[48px]"
        >
          {" "}
          Simple Search{" "}
        </Heading>{" "}
        <div className="flex w-[96%] flex-col items-center lg:w-full md:w-full">
          {" "}
          <EcommerceHeader1 />{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
