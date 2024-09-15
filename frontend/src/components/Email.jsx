// import React from "react";
import { MdCropSquare, MdOutlineStarBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate("/mail/12");
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
          <h1 className="font-semibold">Sahil Vora</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          laudantium corrupti molestias.
        </p>
      </div>
      <div className="flex-none text-sm text-gray">
        <p>12 days ago</p>
      </div>
    </div>
  );
};

export default Email;
