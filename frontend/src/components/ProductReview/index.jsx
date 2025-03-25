import { Text, Heading, RatingBar } from "..";
import React from "react";
export default function ProductReview({
  ratingBar,
  reviewDate = "October 21, 2020",
  reviewTitle = "Amazing and durable jacket",
  reviewAuthor = "Ryan M",
  reviewDescription = "It was a gift for a friend and she completely loved it and her warm and stylish she could wear it with almost everything that she has in her wardrobe. She uses it for many things including hiking and put it through the test of actual outdoors being involved in her purchase. And whenever she doesn&#39;t use it for the outdoors she uses it casually, which is a great alternative for her because she likes to be diversified in her closet. ",
  reviewHelpfulText = "Was this review helpful? Yes (4) No (0)",
  flagAsInappropriateText = "Flag as inapproriate",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-3.5`}>
      {" "}
      <div className="mr-1 flex items-center justify-between gap-5 self-stretch sm:mr-0">
        {" "}
        {!!ratingBar ? (
          <RatingBar
            value={1}
            isEditable={true}
            size={22}
            className="flex gap-2.5"
          />
        ) : null}{" "}
        <Text
          size="paragraph_04"
          as="p"
          className="text-[14px] font-normal tracking-[-0.40px]"
        >
          {" "}
          {reviewDate}{" "}
        </Text>{" "}
      </div>{" "}
      <div className="flex flex-wrap items-center justify-between gap-5 self-stretch">
        {" "}
        <Heading
          size="heading_04"
          as="h5"
          className="text-[22px] font-semibold tracking-[-0.55px] sm:text-[18px]"
        >
          {" "}
          {reviewTitle}{" "}
        </Heading>{" "}
        <Heading
          size="headingxs"
          as="p"
          className="self-end text-[14px] font-bold tracking-[-0.40px]"
        >
          {" "}
          {reviewAuthor}{" "}
        </Heading>{" "}
      </div>{" "}
      <Heading
        as="p"
        className="w-[82%] text-[16px] font-medium leading-[26px] tracking-[-0.20px] sm:w-full sm:text-[13px]"
      >
        {" "}
        {reviewDescription}{" "}
      </Heading>{" "}
      <div className="flex items-center self-stretch">
        {" "}
        <Text
          size="paragraph_04"
          as="p"
          className="text-[14px] font-normal tracking-[-0.40px]"
        >
          {" "}
          {reviewHelpfulText}{" "}
        </Text>{" "}
        <div className="ml-4 h-[16px] w-px bg-text_primary" />{" "}
        <Text
          size="paragraph_04"
          as="p"
          className="ml-3.5 text-[14px] font-normal tracking-[-0.40px]"
        >
          {" "}
          {flagAsInappropriateText}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
