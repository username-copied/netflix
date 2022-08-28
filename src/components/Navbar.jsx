import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 font-bold text-4xl cursor-pointer uppercase z-[100]">
        Netflix
      </h1>
      <div className="">
        <button className="mr-4 p-4 text-white">Log In</button>
        <button className="bg-red-600 p-2  rounded-md text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
