import React from 'react';
import ScrapCategory from '../components/ScrapCategory';

const page = async({params}) => {
  const {slug} = await params ;
  return (
    <div>{slug} : scrapRates 
    <div>
      <ScrapCategory/>
    </div>
    
    
    </div>

  )
}

export default page;