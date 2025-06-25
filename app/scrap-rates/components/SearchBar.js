"use client";
import React from "react";
import { useRouter} from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  



  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    if (selectedCity) {
      router.push(`/scrap-rates/${selectedCity}`);
    }
  };
  return (
    <div className="flex flex-row  gap-8 ">      
      <div className="w-auto border-2 border-black rounded-2xl grow-1 p-4">
        <select name="city"  onChange={handleCityChange} >
          <option value="">--search for cities--</option>
          <option value="Yamunanagar">Yamunanagar</option>
          <option value="Jagadhri">Jagadhri</option>
          <option value="Chachrauli">Chachrauli</option>
        </select>
      </div>
      <div className="w-auto border-2 border-black rounded-2xl grow-3 p-4">
        <input placeholder="search by item name...."></input>
      </div>
    </div>
  );
};

export default SearchBar;
