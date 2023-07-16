import React from "react";

const InputGroup = () => {
  return (
    <div className="flex w-full ">
      <input
        type="text"
        placeholder="Your Email Adress"
        className="w-full bg-colorBlog rounded-l-md px-4 outline-none text-colorText"
      />
      <button className="min-w-[150px] bg-orange-600 rounded-r-md py-3 text-white">
        Sign Up
      </button>
    </div>
  );
};

export default InputGroup;
