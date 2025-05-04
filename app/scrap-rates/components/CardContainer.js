import React from 'react'
import ScrapCategory from '../components/ScrapCategory';
import Scrap_item from '../components/Scrap_item';

const CardContainer = () => {
  return (
    <div className='flex flex-row gap-4'>
        <div className='basis-1/4'>
            <ScrapCategory/>
        </div>
        <div className='basis-3/4'>
            <Scrap_item/>
        </div>
    </div>
  )
}

export default CardContainer;