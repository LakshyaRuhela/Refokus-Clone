import React from "react";
import Button from "./Button";
function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      {/* Left portion  */}
      <div className="n-left flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />

        <div className="links flex gap-14 ml-20">
          {/* Nav items by map */}
          {["Home", "Work", "Carrers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-600"></span>
            ) : (
              <a
                className="text-sm flex items-center gap-1 font-regular"
                href="#"
                key={index}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block h-2 w-2 rounded-full bg-green-600"
                  ></span>
                )}
                {elem}
              </a>
            ),
          )}
        </div>
      </div>
      {/* Right portion  */}
      <Button/>
    </div>
  );
}
export default Navbar;
