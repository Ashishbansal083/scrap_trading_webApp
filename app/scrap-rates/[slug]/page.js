import React from 'react'

const page = async({params}) => {
  const {slug} = await params ;
  return (
    <div>{slug} : scrapRates </div>
  )
}

export default page;