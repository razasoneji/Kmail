// import React from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdInbox,
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";

import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const side = [
  {
    icon: <MdInbox size={"22px"} />,
    title: "Inbox",
  },
  {
    icon: <IoMdStar size={"22px"} />,
    title: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"22px"} />,
    title: "Snoozed",
  },
  {
    icon: <TbSend2 size={"22px"} />,
    title: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"22px"} />,
    title: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"22px"} />,
    title: "More",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md"
        >
          <LuPencil size={"26px"} />
          Compose
        </button>
      </div>

      <div className="text-gray-600">
        {side.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200"
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
