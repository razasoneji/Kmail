import { useState } from "react";
import Emails from "./Emails";

import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";

const mailType = [
  {
    icon: <MdInbox size={"22px"} />,
    title: "Primary",
  },
  {
    icon: <GoTag size={"22px"} />,
    title: "Promotions",
  },
  {
    icon: <FaUserFriends size={"22px"} />,
    title: "Social",
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 text-gray-600">
      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex items-center gap-2 text-gray-600">
          <div className="flex items-center">
            <MdCropSquare size={"22px"} />
            <FaCaretDown size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdRefresh size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdMore size={"22px"} />
          </div>
        </div>

        <div className="text-gray-600 flex items-center gap-2">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size={"26px"} />
          <MdKeyboardArrowRight size={"26px"} />
        </div>
      </div>

      <div className="h-90vh overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((mail, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                key={index}
                className={` ${
                  selected === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent"
                }  flex items-center gap-2 p-4 w-52 hover:bg-gray-200`}
              >
                {mail.icon}
                <span>{mail.title}</span>
              </button>
            );
          })}
        </div>
        <Emails></Emails>
      </div>
    </div>
  );
};

export default Inbox;
