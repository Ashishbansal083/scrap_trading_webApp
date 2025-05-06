import Image from "next/image";
import React from "react";

const Scrap_item = () => {
  return (
    <div className="max-w-sm w-full  shadow-lg rounded-2xl overflow-hidden  lg:max-w-[300px] lg:max-h-[150px] lg:flex ">
      <div
        className="basis-1/2 h-full"
        title="scrap item image"
      >
        <Image
          className="w-full h-full"
          width={130}       
          height={130}
          
          objectFit="intrinsic"
          src="/metals_img.jpg"
          alt="Sunset in the mountains"
        />
      </div>
      <div className="basis-1/2       p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            Item :Heavy Iron Scrap
          </div>
          <p className="text-gray-700 text-base">Rate : 25₹/kg</p>
        </div>
      </div>
    </div>
  );
};

export default Scrap_item;
