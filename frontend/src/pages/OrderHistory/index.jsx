import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import axiosUtil from "../../utils/axiosUtil";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await axiosUtil.get('/user/all-orders');
        setOrders(response.data);
      } catch (error) {
        toast.error("Failed to load order history");
        console.error("Order history loading error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-[50px] bg-background_primary">
        <Header className="self-stretch bg-primary-0" />
        <div className="container-sm mb-1 md:px-5">
          <div>
            <div className="flex flex-col gap-[40px] md:gap-[30px] sm:gap-[20px]">
              <div className="flex flex-col items-start gap-[18px]">
                <Heading
                  size="heading_03"
                  as="h1"
                  className="text-[36px] font-semibold tracking-[-1.50px] md:text-[34px] sm:text-[32px]"
                >
                  Order History
                </Heading>
                <Text className="text-lg text-gray-600">
                  View all your past orders and their details
                </Text>

                {isLoading ? (
                  <div className="w-full flex justify-center py-10">
                    <Text className="text-lg">Loading your orders...</Text>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="w-full flex flex-col items-center py-10">
                    <Img src="/images/defaultNoData.png" alt="No orders" className="w-32 h-32 mb-4" />
                    <Text className="text-lg font-medium mb-2">You haven't placed any orders yet</Text>
                    <Text className="text-sm text-gray-500 mb-6">Start shopping to create your first order</Text>
                    <Link to="/shop">
                      <Button
                        variant="fill"
                        shape="square"
                        className="min-w-[200px] border-[0.5px] border-primary-0 px-[34px] font-semibold tracking-[-0.40px] py-2 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f"
                      >
                        Browse Products
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="w-full">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg mb-6 p-6">
                        <div className="flex justify-between items-center mb-4">
                          <Heading
                            size="heading_05"
                            as="h3"
                            className="text-[18px] font-semibold"
                          >
                            Order #{order.id}
                          </Heading>
                          <Text className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            {order.status}
                          </Text>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                          <div>
                            <Text className="text-gray-500">Total Amount</Text>
                            <Text className="font-medium">${order.total_amount}</Text>
                          </div>
                          <div>
                            <Text className="text-gray-500">Total Items</Text>
                            <Text className="font-medium">{order.total_quantity}</Text>
                          </div>
                          <div>
                            <Text className="text-gray-500">Date</Text>
                            <Text className="font-medium">
                              {formatDate(order.created_at) || 'N/A'}
                            </Text>
                          </div>
                        </div>
                        
                        <Heading
                          size="heading_06"
                          as="h4"
                          className="text-[16px] font-medium mt-4 mb-2"
                        >
                          Items in this order:
                        </Heading>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                          {order.order_items_data && order.order_items_data.length > 0 ? (
                            <ul className="divide-y divide-gray-200">
                              {order.order_items_data.map((item, index) => (
                                <li key={index} className="py-3 flex justify-between">
                                  <div>
                                    <Text className="font-medium">{item.product_name}</Text>
                                    <Text className="text-sm text-gray-500">
                                      {item.quantity} x ${item.unit_price}
                                    </Text>
                                  </div>
                                  <Text className="font-medium">
                                    ${item.total_price}
                                  </Text>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <Text className="text-sm text-gray-500">No items data available for this order</Text>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory; 