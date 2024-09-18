// import React from "react";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/appSlice";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data.success);
      if (response.data.success) {
        dispatch(setAuthUser(response.data.user));
        navigate("/");
        toast.success(response.data.message);
      }

      setInput({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
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
        <h1 className="font-bold text-3xl my-4 text-red-500">LOGIN</h1>
        <input
          value={input.email}
          name="email"
          onChange={changeHandler}
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="password"
          value={input.password}
          name="password"
          onChange={changeHandler}
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className="bg-red-500 p-2 text-white my-2 rounded-xl"
        >
          Login
        </button>
        <p>
          Already have an account?
          <Link to="/signup" className="text-red-500 mx-2">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
