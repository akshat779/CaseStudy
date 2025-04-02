import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Input } from "../../components";
import Header from "../../components/Header";
// import ProductDetails1 from "../../components/ProductDetails1";
import CartItem from "../../components/CartItem";
import useCartStore from "../../store/cartStore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosUtil from "../../utils/axiosUtil";

import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { Link, useNavigate } from "react-router-dom";
const accordionData = [
  { titlethree: "Return Policy" },
  { titlethree: "Shipping Options" },
  { titlethree: "Shipping Options" },
];

export default function CartOnePage() {
  const { cartItems, fetchCartItems, clearCart, resetCart } = useCartStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isClearing, setIsClearing] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [localCartItems, setLocalCartItems] = useState([]);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    const loadCartItems = async () => {
      setIsLoading(true);
      try {
        await fetchCartItems();
      } catch (error) {
        toast.error("Failed to load cart items");
        console.error("Cart loading error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCartItems();
  }, [fetchCartItems]);
  
  
  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);
  
  
  const subtotal = localCartItems.reduce((total, item) => {
    return total + parseFloat(item.total_price || 0);
  }, 0).toFixed(2);
  
  const handleClearCart = async () => {
    if (isClearing) return;
    
    if (confirm("Are you sure you want to clear your cart? This action cannot be undone.")) {
      setIsClearing(true);
      try {
      
        setLocalCartItems([]);
        
        const result = await clearCart();
        if (result.success) {
          toast.success("Cart cleared successfully");
        } else {
          toast.error("Failed to clear cart");
          
          await fetchCartItems();
        }
      } catch (error) {
        toast.error("Error clearing cart");
        console.error("Clear cart error:", error);
        
        await fetchCartItems();
      } finally {
        setIsClearing(false);
      }
    }
  };
  
  const handlePlaceOrder = async () => {
    if (isPlacingOrder) return;
    
    setIsPlacingOrder(true);
    try {
     
      setLocalCartItems([]);
      
      const response = await axiosUtil.post('/user/placeorders');
      
      if (response.status === 200 || response.status === 201) {
       
        resetCart();
        
        toast.success("Order placed successfully!");
        
       
        setTimeout(() => {
          navigate('/orders');
        }, 1500);
      } else {
        toast.error("Failed to place order");
       
        await fetchCartItems();
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || "Error placing order");
      console.error("Place order error:", error);
    
      await fetchCartItems();
    } finally {
      setIsPlacingOrder(false);
    }
  };
  
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
                      Your cart
                    </Heading>
                    
                    {!isLoading && localCartItems.length > 0 && (
                      <Button
                        variant="outline"
                        shape="square"
                        onClick={handleClearCart}
                        disabled={isClearing}
                        className={`border-[0.5px]  px-4 py-1 font-semibold tracking-[-0.40px] text-gray-500 hover:bg-black hover:text-white ${isClearing ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isClearing ? "Clearing..." : "Clear Cart"}
                      </Button>
                    )}
                  </div>
                  
                  <Heading
                    as="h2"
                    className="text-[16px] font-medium tracking-[-0.20px] flex ml-2"
                  >
                    Not ready to checkout? <Link to="/shop"> <span className="font-bold ml-2">Continue Shopping</span></Link>
                  </Heading>

                  {isLoading ? (
                    <div className="w-full flex justify-center py-10">
                      <Text className="text-lg">Loading your cart...</Text>
                    </div>
                  ) : localCartItems.length === 0 ? (
                    <div className="w-full flex flex-col items-center py-10">
                      <Img src="/images/defaultNoData.png" alt="Empty cart" className="w-32 h-32 mb-4" />
                      <Text className="text-lg font-medium mb-2">Your cart is empty</Text>
                      <Text className="text-sm text-gray-500 mb-6">Add items to your cart to see them here</Text>
                      <Link to="/shop">
                        <Button
                          variant="fill"
                          shape="square"
                          className="min-w-[200px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] py-2 text-gray-50 hover:text-[#1D1D1D] hover:bg-[#FFFFFF] !text-black-900_7f"
                        >
                          Browse Products
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="w-full">
                      {localCartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>
                  )}
                </div>
                
                {!isLoading && localCartItems.length > 0 && (
                  <div className="flex flex-col items-start gap-8 w-full">
                    <Heading
                      size="heading_04"
                      as="h3"
                      className="text-[22px] font-semibold tracking-[-0.55px]"
                    >
                      Order Summary
                    </Heading>
                    <Input
                      shape="square"
                      name="inputone_one"
                      placeholder={`Enter coupon code here`}
                      className="w-[84%] !border-[0.5px] px-4 tracking-[-0.30px]"
                    />
                    <div className="flex flex-col items-start gap-3 w-[500px] py-8">
                      <div className="flex flex-wrap justify-between gap-5 self-stretch">
                        <Text
                          size="texts"
                          as="p"
                          className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                        >
                          Subtotal
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-[68px] text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                        >
                          ${subtotal}
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5 self-stretch">
                        <Text
                          size="texts"
                          as="p"
                          className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                        >
                          Shipping
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-[68px] text-[14px] font-normal tracking-[-0.30px] !text-primary-1"
                        >
                          Calculated at the next step
                        </Text>
                      </div>
                      <div className="h-px w-[86%] bg-text_primary" />
                      <div className="flex flex-wrap justify-between gap-5 self-stretch">
                        <Text
                          size="texts"
                          as="p"
                          className="text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                        >
                          Total
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-[68px] text-[14px] font-normal tracking-[-0.30px] !text-primary-0"
                        >
                          ${subtotal}
                        </Text>
                      </div>
                    </div>
                    <Button
                      variant="fill"
                      shape="square"
                      onClick={handlePlaceOrder}
                      disabled={isPlacingOrder}
                      className={`min-w-[440px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] py-2 text-gray-50 hover:text-[#1D1D1D] hover:bg-[#FFFFFF] !text-black-900_7f ${isPlacingOrder ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isPlacingOrder ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                )}
              </div>
              
              {!isLoading && localCartItems.length > 0 && (
                <div className="flex flex-col items-start gap-3.5">
                  <Heading
                    size="heading_04"
                    as="h4"
                    className="text-[22px] font-semibold tracking-[-0.55px]"
                  >
                    Order Information
                  </Heading>
                  <Accordion
                    preExpanded={[0]}
                    className="flex flex-col gap-3.5 self-stretch py-3"
                  >
                    {accordionData.map((d, i) => (
                      <AccordionItem uuid={i} key={`expandablelistt${i}`}>
                        <div className="flex flex-1 flex-col gap-2.5">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                      <Heading
                                        size="heading_05"
                                        as="h5"
                                        className="text-[16px] font-semibold tracking-[-0.40px] !text-gray-500_01"
                                      >
                                        {d.titlethree}
                                      </Heading>
                                      {props?.expanded ? (
                                        <Img
                                          src="images/img_frame_gray_500_01.svg"
                                          alt="Image"
                                          className="mr-[548px] h-[12px] self-end"
                                        />
                                      ) : (
                                        <Img
                                          src="images/img_plus_gray_500_01.svg"
                                          alt="Plusone"
                                          className="mr-[548px] h-[12px]"
                                        />
                                      )}
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="mb-3 flex">
                              <Text
                                size="textmd"
                                as="p"
                                className="w-[46%] text-[16px] font-normal leading-[22px] tracking-[-0.40px] !text-gray-500_01"
                              >
                                This is our example return policy which is
                                everything you need to know about our returns.
                              </Text>
                            </div>
                          </AccordionItemPanel>
                        </div>
                        <div className="h-px w-[52%] rotate-[0deg] bg-text_primary" />
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
