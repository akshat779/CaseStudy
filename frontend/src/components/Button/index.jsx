import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    blue_A400: "bg-blue-a400 text-colors-white",
    colors_white: "bg-colors-white text-colors-grey-grey_1",
    primary_0: "bg-primary-0 text-colors-white",
  },
  outline: {
    text_primary: "border-text_primary border border-solid text-text_primary",
    primary_0: "border-primary-0 border-[0.5px] border-solid text-primary-0",
  },
};

const sizes = {
  xs: "h-[30px] px-5 text-[13px]",
  sm: "h-[50px] px-[34px] text-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "sm",
  color = "primary_0",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row  items-center justify-center text-center cursor-pointer whitespace-nowrap tracking-[-0.40px] border-solid ${
        shape && shapes[shape]
      }${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_A400",
    "text_primary",
    "colors_white",
    "primary_0",
  ]),
};
export { Button };
