// import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { IoIosSearch, IoIosSettings } from "react-icons/io";
import Avatar from "react-avatar";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          {user && (
            <>
              <div className="p-3 hover:bg-gray-200 cursor-pointer rounded-md">
                <RxHamburgerMenu size={"26px"} />
              </div>
            </>
          )}

          <img
            className="w-8"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png?20160129092800"
            alt="Kmail Logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Kmail</h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-[50%] mr-60">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
              <IoIosSearch
                size={"26px"}
                className="text-gray-700 cursor-pointer"
              />
              <input
                type="text"
                placeholder="search mail"
                className="rounded-full w-full bg-transparent outline-none px-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <CiCircleQuestion size={"26px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoIosSettings size={"26px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <TbGridDots size={"26px"} />
            </div>
            <Avatar
              src="data:image/jpeg;base64,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"
              size="38"
              className="cursor-pointer"
              round={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;