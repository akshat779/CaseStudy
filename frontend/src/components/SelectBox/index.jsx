import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
const shapes = { square: "rounded-[0px]" };
const variants = {
  outline: {
    indigo_900: "border-indigo-900 border border-solid text-text_primary",
    text_primary:
      "border-text_primary border-[0.5px] border-solid text-colors-grey-grey_2",
  },
};
const sizes = {
  sm: "h-[50px] px-3.5 text-[18px]",
  xs: "h-[40px] pl-3.5 pr-2 text-[14px]",
};
const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "outline",
      size = "xs",
      color = "text_primary",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        {" "}
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shape && shapes[shape]} ${
            size && sizes[size]
          } ${variant && variants[variant]?.[color]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": { border: "0 !important" },
            }),
            input: (provided) => ({ ...provided, color: "inherit" }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#0d0d0d" : "transparent",
              color: state.isSelected ? "#ffffff" : "inherit",
              "&:hover": { backgroundColor: "#0d0d0d", color: "#ffffff" },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({ ...provided, margin: 0 }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: (base) => ({
              ...base,
              minWidth: "max-content",
              width: "max-content",
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />{" "}
        {children}{" "}
      </>
    );
  }
);
SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["indigo_900", "text_primary"]),
};
export { SelectBox };
