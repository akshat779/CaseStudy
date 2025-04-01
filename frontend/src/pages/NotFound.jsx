import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";


const NotFound = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center px-4 bg-gray-900 text-white">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-12">
          <Heading 
            as="h1" 
            className="font-mono text-9xl md:text-[12rem] font-bold tracking-tighter text-gray-800"
          >
            <span className=" text-9xl bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500">
              404
            </span>
          </Heading>
        </div>

        {/* Main message */}
        <p 
          as="h2" 
          className="font-poppins text-2xl md:text-2xl font-light mb-6 text-gray-300"
        >
          Page not found
        </p>
        
        <p 
          as="p" 
          className="text-gray-400 text-base md:text-lg mb-12 max-w-lg mx-auto font-light"
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to="/" 
            className="border border-gray-700 text-gray-300 px-8 py-3 rounded-md font-medium text-base hover:bg-gray-800 transition-all duration-300"
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="bg-black text-gray-50 px-8 py-3 rounded-md font-medium text-base hover:bg-gray-50 hover:text-gray-950 transition-all duration-300"
          >
            Shop
          </Link>
        </div>
        
        {/* Minimalistic line decoration */}
        <div className="mt-20 mb-8">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
