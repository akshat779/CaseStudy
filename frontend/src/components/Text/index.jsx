import React from "react";
const sizes = {
  paragraph_04: "tracking-[-0.40px] text-[14px] font-normal",
  paragraph_02: "tracking-[-0.30px] text-[18px] font-normal lg:text-[15px]",
  buttons_small: "tracking-[-0.30px] font-poppins text-[14px] font-normal",
  paragraph_01: "tracking-[-0.40px] text-[20px] font-normal lg:text-[17px]",
  textxs: "text-[13px] font-normal",
  texts: "text-[14px] font-normal",
  textmd: "text-[16px] font-normal lg:text-[13px]",
  textlg: "text-[17px] font-normal lg:text-[14px]",
  textxl: "text-[24px] font-normal lg:text-[20px] md:text-[22px]",
};
const Text = ({
  children,
  className = "",
  as,
  size = "textlg",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-text_primary font-inter ${className} ${sizes[size]} `}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Text };
