import React from "react";
import { IoMdReturnRight } from "react-icons/io";
function Button({ title = "Get Started" }) {
  return (
    <div className="min-w-40 px-3 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between cursor-pointer">
      <span className=" text-sm font-medium">{title}</span>
      <IoMdReturnRight />
    </div>
  );
}
export default Button;
