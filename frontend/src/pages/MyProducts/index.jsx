import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Input } from "../../components";
import Header from "../../components/Header";
import TenantProduct from "../../components/tenantProduct";
import { useEffect, useState } from "react";
import useTenantStore from "../../store/tenantStore";

import React from "react";

import { Link } from "react-router-dom";

export default function MyProducts() {

  const [isLoading, setIsLoading] = useState(true);
  
  const { myproducts, fetchMyProducts} = useTenantStore();


  useEffect(() => {
    setIsLoading(true);
    try{
        fetchMyProducts();
    }
    catch(error){
        console.error("Error fetching products",error);
    }
    finally{
        setIsLoading(false);
    }

  }, []);


  return (
    <>
      <div className="flex w-full flex-col items-center gap-[50px] bg-background_primary">
        <Header className="self-stretch bg-primary-0" />
        <div className="container-sm mb-1 md:px-5">
          <div>
            <div className="flex flex-col gap-[114px] md:gap-[85px] sm:gap-[57px]">
              <div className="flex items-center md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[18px] md:self-stretch">
                  <div className="flex w-full justify-between items-center">
                    <Heading
                      size="heading_03"
                      as="h1"
                      className="text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
                    >
                      Your Products
                    </Heading>
                  </div>

                  {isLoading ? (
                    <div className="w-full flex justify-center py-10">
                      <Text className="text-lg">Loading your Products...</Text>
                    </div>
                  ) : myproducts.length === 0 ? (
                    <div className="w-full flex flex-col items-center mt-10 py-10">
                      <Text className="text-5xl font-medium mb-2">
                        You dont have any Products
                      </Text>
                      <Text className="text-sm text-gray-500 mb-6">
                        Start by Creating a product
                      </Text>
                      <Link to="/createproduct">
                        <Button
                          variant="fill"
                          shape="square"
                          className="min-w-[200px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] py-2 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
                        >
                          Create Products
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="w-full">
                      {myproducts.map((item) => (
                        <TenantProduct key={item.id} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
