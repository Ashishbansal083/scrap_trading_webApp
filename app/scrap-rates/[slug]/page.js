import React from 'react';
import ScrapCategory from '../components/ScrapCategory';

const page = async({params}) => {
  const {slug} = await params ;
  return (
    <div className='p-10'>{slug} : scrapRates 
    <div >
      <ScrapCategory/>
    </div>
    
    
    </div>

  )
}

export default page;