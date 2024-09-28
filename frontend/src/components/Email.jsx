/* eslint-disable react/prop-types */
// import React from "react";
import { MdCropSquare, MdOutlineStarBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";

const Email = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email._id}`);
  };

  return (
    <div
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="text-gray-400">
          <MdCropSquare size={"22px"} />
        </div>
        <div className="text-gray-400">
          <MdOutlineStarBorder size={"22px"} />
        </div>
        <div>
          <h1 className="font-semibold">{email?.subject}</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>{email?.message}</p>
      </div>
      <div className="flex-none text-sm text-gray">
        {email?.createdAt ? (
          (() => {
            const cre = new Date(email.createdAt);
            const now = new Date();
            const timeDifference = now - cre;
            const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            return <p>{daysAgo} days ago</p>;
          })()
        ) : (
          <p>Date not available</p>
        )}
      </div>
    </div>
  );
};

export default Email;
