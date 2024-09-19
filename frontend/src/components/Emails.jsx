// import React from "react";
import { useSelector } from "react-redux";
import useGetAllEmails from "../hooks/useGetAllEmails";
import Email from "./Email";
const Emails = () => {
  useGetAllEmails();
  const { emails } = useSelector((store) => store.app);
  return (
    <div>
      {emails &&
        emails?.map((email) => <Email key={email._id} email={email} />)}
    </div>
  );
};

export default Emails;
