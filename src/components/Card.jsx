import React from "react";
import { FiArrowRight } from "react-icons/fi";
function Card({ width, start, para, hover }) {
  // for hover
  const hoverClass = hover === true ? "hover:bg-violet-700" : "";
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${width} ${hoverClass} min-h-[20rem] flex flex-col `}
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>Hello</h3>
          <FiArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">Heading h ji</h1>
      </div>
      <div className="down w-full mt-40 ">
        {/* Conditions for card items */}
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
              {" "}
              Started{" "}
            </button>
          </>
        )}
        {/* conditon for para  */}
        {para === true && (
          <p className="text-sm text-zinc-500 mt-[100px]">
            Lorem ipsum dolor sit amet.
          </p>
        )}
      </div>
    </div>
  );
}
export default Card;
