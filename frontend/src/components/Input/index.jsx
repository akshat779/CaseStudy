import React from "react";
import PropTypes from "prop-types";
const shapes = { square: "rounded-[0px]" };
const variants = {
  outline: {
    text_primary:
      "border-text_primary border-[0.5px] border-solid text-colors-grey-grey_2",
  },
};
const sizes = {
  sm: "h-[36px] pl-3.5 pr-2 text-[16px]",
  xs: "h-[20px] pr-3 text-[17px]",
  md: "h-[40px] px-4 text-[14px]",
};
const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "md",
      color = "text_primary",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${
          shape && shapes[shape]
        } ${variant && (variants[variant]?.[color] || variants[variant])} ${
          size && sizes[size]
        }`}
      >
        {" "}
        {!!label && label} {!!prefix && prefix}{" "}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />{" "}
        {!!suffix && suffix}{" "}
      </label>
    );
  }
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["text_primary"]),
};
export { Input };
