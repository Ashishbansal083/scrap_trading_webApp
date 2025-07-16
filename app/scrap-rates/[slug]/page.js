import React from "react";
import CardContainer from "../components/CardContainer";


const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div className="p-10">
      {/* <h2>{slug} : scrapRates</h2> */}
      
      <div>
       <CardContainer city={slug}/>
      </div>
    </div>
  );
};

export default page;
