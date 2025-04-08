import { Link, NavLink } from "react-router-dom";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Input } from "../Input";
import { CloseSVG } from "../Input/close";
import { Text } from "../Text";
import userStore from "../../store/userStore";
import productStore from "../../store/productStore";
import useCartStore from "../../store/cartStore";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import React, { useEffect, useState, useRef } from "react";

const Header = () => {
  const { logout, isAuthenticated, getCurrentUser, image, role } = userStore();
  const { setSearchQuery } = productStore();
  const { cartCount, fetchCartItems } = useCartStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
 
  const handleLogout = () => {
    logout();
  };
  
  useEffect(() => {
    getCurrentUser();
  }, []);
  
  // Load cart items when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchCartItems();
    }
  }, [isAuthenticated, fetchCartItems]);
  
  // Refetch cart items when tab becomes visible again
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isAuthenticated) {
        fetchCartItems();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Also refetch on focus
    window.addEventListener('focus', () => {
      if (isAuthenticated) {
        fetchCartItems();
      }
    });
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', () => {
        if (isAuthenticated) {
          fetchCartItems();
        }
      });
    };
  }, [isAuthenticated, fetchCartItems]);

  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(searchBarValue2);
      e.preventDefault();
    }
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="flex flex-row items-center justify-between gap-4 self-stretch mb-8">
      <div className="container-md mt-4 flex items-center justify-between gap-5 self-stretch md:flex-row md:px-5">
        <div className="flex flex-row w-[70%] items-center justify-betweem gap-5 md:w-full md:flex-row">
          <ul className="flex flex-wrap items-center gap-8">
            <Link to="/heroone">
              <li>
                <Heading
                  size="headinglg"
                  as="h5"
                  className="!font-inter text-[20px] font-bold tracking-[-0.60px]"
                >
                  BeeCommerce
                </Heading>
              </li>
            </Link>
            <li>
              {role == "user" ? (
              <Link to="/shop">
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                >
                  Shop Products
                </Text>
              </Link>) : (null)
              }
            </li>

            <li>
              {role == "admin" ? 
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold cursor-pointer"
                >
                  <Link to="/createtenant">
                    Create Tenant
                  </Link>
                </Text>
               : null}
              {role == "tenant" ? <Link to="/createproduct" className="cursor-pointer">
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                >
                  Create Product
                </Text>
              </Link> : null}
            </li>
            {role == "admin" ? 
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold cursor-pointer"
                >
                  <Link to="/createadmin">
                    Create Admin
                  </Link>
                </Text>
               : null}
            <li>

            </li>
          </ul>
          <Input
            size="sm"
            shape="square"
            name="search"
            placeholder={`Search products...`}
            value={searchBarValue2}
            onChange={(e) => setSearchBarValue2(e.target.value)}
            onKeyDown={handleSearch}
            prefix={
              <div className="flex h-[16px] w-[14px] items-center justify-center">
                <Img
                  src="/images/img_search_text_primary.svg"
                  alt="Search"
                  className="h-[15px] w-[15px] object-contain"
                />
              </div>
            }
            suffix={
              searchBarValue2?.length > 0 ? (
                <CloseSVG
                className="ml-6 cursor-pointer"
                  onClick={() => {
                    setSearchBarValue2("");
                    setSearchQuery("");
                  }}
                  height={18}
                  width={18}
                />
              ) : null
            }
            className="flex-grow gap-3 self-end font-inter tracking-[-0.60px] text-text_secondary p-2"
          />
        </div>
        <div className="flex w-[15%] items-center self-end gap-5">
          {role == "user" ? (
          <div className="flex w-full justify-center items-center gap-1.5">
            <Link to="/cartone" onClick={() => isAuthenticated && fetchCartItems()}>
              <Img
                src="/images/img_bag_text_primary.svg"
                alt="Bag"
                className="h-[20px] w-[20px]"
              />
            </Link>
            <Text as="p" className="text-[17px] font-normal tracking-[-0.60px]">
              {cartCount}
            </Text>
          </div>
          ) : (null)}
          {isAuthenticated ? (
            <Text
              as="p"
              className="text-[17px] font-bold text-xl tracking-[-0.60px] hover:font-bold cursor-pointer"
            >
              <button onClick={handleLogout}>Logout</button>
            </Text>
          ) : (
            <Link to="/loginemail">
              <Text
                as="p"
                className="text-[17px] font-bold text-xl tracking-[-0.60px] hover:font-bold cursor-pointer"
              >
                Login
              </Text>
            </Link>
          )}
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <div 
                className="flex items-center cursor-pointer" 
                onClick={toggleDropdown}
              >
                {image ? (
                  <img src={image} alt="User" className="w-2 h-2 rounded-full" />
                ) : (
                  <FaRegUserCircle className="text-xl text-black rounded-full" />
                )}
                <IoIosArrowDown className="ml-1 text-sm" />
              </div>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1">
                  {role === 'user' && (<Link 
                    to="/orders" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Orders
                  </Link>)}
                  {role === 'admin' && (<Link 
                    to="/mytenants" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Tenants
                  </Link>)}
                  {role === 'tenant' && (<Link 
                    to="/myproducts" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Products
                  </Link>)}
                  
                  <div 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {/* <div className="h-px w-full self-stretch bg-black-900_7f" /> */}
    </header>
  );
};

export default Header;
