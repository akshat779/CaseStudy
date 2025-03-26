import React from "react";
const sizes = {
  heading_02:
    "tracking-[-2.40px] text-[56px] font-semibold lg:text-[47px] md:text-[48px] sm:text-[42px]",
  heading_04: "tracking-[-0.55px] text-[22px] font-semibold lg:text-[18px]",
  heading_03:
    "tracking-[-1.50px] text-[36px] font-semibold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  paragraph_03: "tracking-[-0.20px] text-[16px] font-medium lg:text-[13px]",
  heading_05: "tracking-[-0.40px] text-[16px] font-semibold lg:text-[13px]",
  heading_01:
    "tracking-[-2.16px] text-[72px] font-semibold lg:text-[72px] md:text-[48px]",
  headingxs: "text-[14px] font-bold",
  headings: "text-[16px] font-bold lg:text-[13px]",
  headingmd: "text-[17px] font-semibold lg:text-[14px]",
  headinglg: "text-[20px] font-bold lg:text-[17px]",
  headingxl: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  heading2xl:
    "text-[36px] font-semibold lg:text-[30px] md:text-[34px] sm:text-[32px]",
};
const Heading = ({
  children,
  className = "",
  size = "paragraph_03",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-text_primary font-publicsans ${className} ${sizes[size]}`}
      {...restProps}
    >
      
      {children}
    </Component>
  );
};
export { Heading };
