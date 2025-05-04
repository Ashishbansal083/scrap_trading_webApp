import Image from "next/image";
import React from "react";

const Scrap_item = () => {
  return (
    <div className="max-w-sm w-full rounded-2xl lg:max-w-[400px] lg:flex ">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('/metals_img.jpg')]"
        
        title="scrap item image"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
         
          <div className="text-gray-900 font-bold text-xl mb-2">
            Item :Heavy Iron Scrap
          </div>
          <p className="text-gray-700 text-base">
            Rate : 25₹/kg
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Scrap_item;
