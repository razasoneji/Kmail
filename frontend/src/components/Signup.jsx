// import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        //alert("Registration Successfull");
        navigate("/login");
        toast.success(response.data.message);
      }

      setInput({
        fullname: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex items-center justify-center w-screen mt-24">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 bg-white p-4 w-[20%] shadow-md shadow-red-50 z-30"
      >
        <h1 className="font-bold text-3xl my-4 text-red-500">SIGNUP</h1>
        <input
          type="text"
          onChange={changeHandler}
          name="fullname"
          value={input.fullname}
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="email"
          onChange={changeHandler}
          name="email"
          value={input.email}
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="password"
          onChange={changeHandler}
          name="password"
          value={input.password}
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className="bg-red-500 p-2 text-white my-2 rounded-xl"
        >
          SignUp
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="text-red-500 mx-2">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
