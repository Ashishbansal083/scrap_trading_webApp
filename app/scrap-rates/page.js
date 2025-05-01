import React from "react";
import Link from "next/link";

const page = () => {
  const cities = ["Yamunanagar", "Jagadhri", "Chachrauli"];
  return (
    <ul>
      {cities.map((city) => (
        <li key={city}>
          <Link
            href={`/scrap-rates/${city}`}
            className="text-green-600 hover:text-green-900"
          >
            {city}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default page;
