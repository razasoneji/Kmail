// import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useState } from "react";

const SendMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const { open } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(formData);
    dispatch(setOpen(false));
  };
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
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          name="to"
          value={formData.to}
          onChange={changeHandler}
          type="text"
          placeholder="To"
          className="outline-none py-1"
        />
        <hr />
        <input
          name="subject"
          value={formData.subject}
          onChange={changeHandler}
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <hr />
        <textarea
          name="message"
          value={formData.message}
          onChange={changeHandler}
          rows={"10"}
          cols={"30"}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 rounded-full w-fit px-5 py-1 text-white"
        >
          send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
