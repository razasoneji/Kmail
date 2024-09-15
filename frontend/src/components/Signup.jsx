// import React from "react";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center w-screen mt-24">
      <form
        action=""
        className="flex flex-col gap-3 bg-white p-4 w-[20%] shadow-md shadow-red-50 z-30"
      >
        <h1 className="font-bold text-3xl my-4 text-red-500">SIGNUP</h1>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="password"
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
