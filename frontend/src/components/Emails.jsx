// import React from "react";
import { useSelector } from "react-redux";
import useGetAllEmails from "../hooks/useGetAllEmails";
import Email from "./Email";
import { useState } from "react";
import { useEffect } from "react";

const Emails = () => {
  useGetAllEmails();
  const { emails, searchText } = useSelector((store) => store.app);
  const [filterEmail, setFilterEmail] = useState(emails);
  useEffect(() => {
    const filteredEmail = emails.filter((e) => {
      return (
        e.subject.toLowerCase().includes(searchText.toLowerCase()) ||
        e.to.toLowerCase().includes(searchText.toLowerCase()) ||
        e.message.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilterEmail(filteredEmail);
  }, [searchText, emails]);
  return (
    <div>
      {filterEmail &&
        filterEmail?.map((email) => <Email key={email._id} email={email} />)}
    </div>
  );
};

export default Emails;
