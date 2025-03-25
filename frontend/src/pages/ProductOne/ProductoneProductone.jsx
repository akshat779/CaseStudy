import React, { Suspense } from "react";
export default function ProductoneProductone() {
  return (
    <div className="grid w-[46%] grid-cols-2 gap-3 md:grid-cols-1 md:px-5">
      {" "}
      <Suspense fallback={<div>Loading feed...</div>}>
        {" "}
        {[...Array(4)].map((d, index) => (
          <div
            key={"productone" + index}
            className="h-[270px] w-full bg-gray-400"
          />
        ))}{" "}
      </Suspense>{" "}
    </div>
  );
}
