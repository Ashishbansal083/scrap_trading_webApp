"use client";

import React, { useEffect, useState } from "react";
import ScrapCategory from "../components/ScrapCategory";
import Scrap_item from "../components/Scrap_item";
import SearchBar from "../components/SearchBar";

const CardContainer = ({ city }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/item");
        const data = await res.json();
        setItems(data.items); 
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <p className="text-6xl">Scrap prices</p>
      </div>
      <div className="flex justify-center">
        <p className="text-3xl border-2 border-green-600 rounded-lg p-2">
          {city}
        </p>
      </div>
      <div className="w-full">
        <SearchBar />
      </div>
      <div className="flex flex-row gap-[100px]">
        <div className="basis-1/4">
          <ScrapCategory />
        </div>
        <div className="basis-3/4 flex flex-row gap-4 flex-wrap">
          {items.map((item, index) => (
            <Scrap_item
              key={index}
              name={item.name}
              pricePerKg={item.pricePerKg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
