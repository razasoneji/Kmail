// import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";

const SendMail = () => {
  const { open } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <div
      className={` ${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex items-center justify-between px-3 py-2 bg-[#F2F6FC]">
        <h1>New Mesage</h1>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxCross2 onClick={() => dispatch(setOpen(false))} size={"22px"} />
        </div>
      </div>
      <form action="" className="flex flex-col p-3 gap-2">
        <input type="text" placeholder="To" className="outline-none py-1" />
        <hr />
        <input
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <hr />
        <textarea rows={"10"} cols={"30"}></textarea>
      </form>
    </div>
  );
};

export default SendMail;
