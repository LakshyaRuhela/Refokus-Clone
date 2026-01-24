import React from "react";
function Marquee({ imagesUrls }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hiddden">
      {imagesUrls.map((url) => (
        <img src={url} className="w-32 flex-shrink-0 " />
      ))}
      {imagesUrls.map((url) => (
        <img src={url} className="w-32 flex-shrink-0"/>
      ))}
    </div>
  );
}
export default Marquee;
