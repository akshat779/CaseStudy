import { Link, NavLink } from "react-router-dom";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Input } from "../Input";
import { CloseSVG } from "../Input/close";
import { Text } from "../Text";
import userStore from "../../store/userStore";

import React from "react";

const Header = () => {
  const {logout,isAuthenticated} = userStore();
  const handleLogout = () => {
    logout();
  }
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
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
              <Link to="/shop" >
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                >
                  Shop Products
                </Text>
              </Link>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                >
                  Stories
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Text
                  as="p"
                  className="text-[17px] font-normal tracking-[-0.60px] hover:font-bold"
                >
                  About
                </Text>
              </a>
            </li>
          </ul>
          <Input
            size="sm"
            shape="square"
            name="search"
            placeholder={`Search`}
            value={searchBarValue2}
            onChange={(e) => setSearchBarValue2(e.target.value)}
            prefix={
              <div className="flex h-[16px] w-[14px] items-center justify-center">
                <Img
                  src="images/img_search_text_primary.svg"
                  alt="Search"
                  className="h-[15px] w-[15px] object-contain"
                />
              </div>
            }
            suffix={
              searchBarValue2?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue2("")}
                  height={14}
                  width={14}
                />
              ) : null
            }
            className="flex-grow gap-3 self-end font-inter tracking-[-0.60px] text-text_secondary p-2"
          />
        </div>
        <div className="flex w-[10%] self-end gap-3">
          <div className="flex w-full justify-center items-center gap-1.5">
            <a href="#">
              <Img
                src="images/img_bag_text_primary.svg"
                alt="Bag"
                className="h-[20px]"
              />
            </a>
            <Text as="p" className="text-[17px] font-normal tracking-[-0.60px]">
              0
            </Text>
          </div>
          { isAuthenticated ? 
           <Text
           as="p"
           className="text-[17px] font-bold text-xl tracking-[-0.60px] hover:font-bold cursor-pointer"
         >
           <button onClick={handleLogout}>
           Logout
           </button>
         </Text>
         
          :
          <Link to="/loginemail">
          <Text
            as="p"
            className="text-[17px] font-bold text-xl tracking-[-0.60px] hover:font-bold cursor-pointer"
          >
            Login
          </Text>
          </Link> 
         
      }
        </div>
      </div>
      {/* <div className="h-px w-full self-stretch bg-black-900_7f" /> */}
    </header>
  );
};

export default Header;
