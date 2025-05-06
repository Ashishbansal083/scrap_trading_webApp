import React from "react";
import ScrapCategory from "../components/ScrapCategory";
import Scrap_item from "../components/Scrap_item";
import SearchBar from "../components/SearchBar";

const CardContainer = () => {
  return (
    <div  className="flex flex-col gap-8">
      <div className=" flex justify-center"><p className="text-6xl">Scrap prices</p></div>
      <div className="w-full "><SearchBar/></div>
      <div className="flex flex-row gap-[100px]">
        <div className="basis-1/4">
          <ScrapCategory />
        </div>
        <div className="basis-3/4 flex flex-row gap-4 flex-wrap">
          <Scrap_item />
          <Scrap_item />
          <Scrap_item />
          <Scrap_item />
          <Scrap_item />
          <Scrap_item />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
