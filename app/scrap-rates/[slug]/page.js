import React from "react";
import CardContainer from "../components/CardContainer";


const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div className="p-10">
      {slug} : scrapRates
      <div>
       <CardContainer/>
      </div>
    </div>
  );
};

export default page;
