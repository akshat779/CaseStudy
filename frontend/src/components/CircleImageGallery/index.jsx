import { Img } from "..";
import React from "react";
export default function CircleImageGallery({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch gap-2 flex-1`}
    >
       
      <Img
        src="images/img_base.svg"
        alt="Baseone"
        className="h-[24px] w-[20%] rounded-[50%]"
      />
       
      <Img
        src="images/img_base_deep_purple_a200.svg"
        alt="Basethree"
        className="h-[24px] w-[20%] rounded-[50%]"
      />
       
      <Img
        src="images/img_base_green_700.svg"
        alt="Basefive"
        className="h-[24px] w-[20%] rounded-[50%]"
      />
       
      <Img
        src="images/img_base_blue_a400.svg"
        alt="Baseseven"
        className="h-[24px] w-[20%] rounded-[50%]"
      />
       
      <Img
        src="images/img_base_red_400.svg"
        alt="Basenine"
        className="h-[24px] w-[20%] rounded-[50%]"
      />
       
    </div>
  );
}
