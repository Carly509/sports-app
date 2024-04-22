import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* 1st part */}
        <div>
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            About Club
          </h1>
          <p className="text-[17px] text-white font-semibold text-opacity-70 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            magni similique, pariatur soluta repellat animi consequatur
          </p>
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        {/* 2nd part */}
        <div>
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            About us
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            about club
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            contacts
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            price table
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            shop
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            our players
          </p>
        </div>
        {/* 3rd part */}
        <div>
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            Quick Link
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            about club
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            contacts
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            price table
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            shop
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
            our players
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            Get In touch
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            +012 345 56790
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">
            example@gmail.com
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem] ">
            Simon , NY
          </p>
        </div>
      </div>
      {/* copyright */}
      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">
        COPYRIGHT - 2024
      </h1>
    </div>
  );
};

export default Footer;
