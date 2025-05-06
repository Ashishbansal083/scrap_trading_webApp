import React from "react";
import Link from "next/link";

const page = () => {
  const cities = ["Yamunanagar", "Jagadhri", "Chachrauli"];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <div className="text-center">
        <p className="text-4xl">Scrap Prices</p>
      </div>
      <div className="text-center flex flex-col gap-4">
        <p className="text-2xl">Where do you reside.. ? </p>
        <ul className="flex flex-row gap-4 ">
          {cities.map((city) => (
            <li key={city} className="border-2 border-green-600 rounded-lg p-2">
              <Link
                href={`/scrap-rates/${city}`}
                className="text-green-600 hover:text-green-900"
              >
                {city}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
