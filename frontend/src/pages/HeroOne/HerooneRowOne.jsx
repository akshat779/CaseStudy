import React from "react";
import { Img } from "../../components";
import HomePage from "/public/images/HomePage.avif"
export default function HerooneRowOne() {
  return (
    <div className="mb-1 flex justify-center px-14 md:px-5">
    <Img src={HomePage}
    className={"mx-auto  w-full max-w-[800px]  md:px-5"} />
      
    </div>
  );
}
