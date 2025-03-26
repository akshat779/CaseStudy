import { Text, Img, Heading, Button } from "../../components";
import ProductCard1 from "../../components/ProductCard1";
import React, { Suspense } from "react";
const data = [
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
  {
    productTitle: "Men’s Winter Jacket",
    productSize: "M",
    productPrice: "$99",
  },
];
export default function ShoponeColumntwo() {
  return (
    <div className="mb-1 flex flex-col items-center">
      
      <div className="container-sm flex flex-col gap-5 md:px-5">
        
        <div>
          
          <div className="flex flex-col items-end gap-3.5">
            
            <div className="flex items-start justify-end self-stretch sm:flex-col">
              
              <div className="flex flex-1 gap-2.5 sm:flex-col sm:self-stretch">
                
                <Button
                  color="text_primary"
                  size="xs"
                  variant="fill"
                  shape="square"
                  className="min-w-[94px] border border-text_primary px-[19px] tracking-[-0.40px]"
                >
                  
                  Sweaters
                </Button>
                <Button
                  color="text_primary"
                  size="xs"
                  shape="square"
                  className="min-w-[94px] !border px-[31px] tracking-[-0.40px] sm:px-5"
                >
                  
                  Tops
                </Button>
                <Button
                  color="text_primary"
                  size="xs"
                  shape="square"
                  className="min-w-[94px] !border pl-[29px] pr-[21px] tracking-[-0.40px] sm:px-5"
                >
                  
                  Jackets
                </Button>
                <Button
                  color="text_primary"
                  size="xs"
                  shape="square"
                  className="min-w-[94px] !border px-[31px] tracking-[-0.40px] sm:px-5"
                >
                  
                  Hats
                </Button>
              </div>
              <div className="mt-1.5 flex flex-wrap items-end self-end border border-solid border-indigo-900 p-1.5">
                
                <Text
                  size="textxs"
                  as="p"
                  className="text-[13px] font-normal tracking-[-0.30px] !text-black-900_7f"
                >
                  
                  Sort By
                </Text>
                <Heading
                  size="headingxs"
                  as="h2"
                  className="ml-2.5 !font-inter text-[14px] font-bold tracking-[-0.30px]"
                >
                  
                  Popular
                </Heading>
                <Img
                  src="images/img_arrow_down_text_primary.svg"
                  alt="Arrowdownone"
                  className="ml-1 h-[24px] self-center"
                />
              </div>
            </div>
            <Text
              size="textxs"
              as="p"
              className="text-[13px] font-normal tracking-[-0.40px]"
            >
              
              Showing 1003 Products
            </Text>
          </div>
        </div>
        <div className="flex gap-5 md:flex-col">
          
          <Suspense fallback={<div>Loading feed...</div>}>
            
            {data.map((d, index) => (
              <ProductCard1 {...d} key={"shopone" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
