import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex flex-row  gap-8 '>
        <div className='w-auto border-2 border-black rounded-2xl grow-1 p-4'>
            <select >
                <option>Yamunanagar</option>
                <option>Jagadhri</option>
                <option>Chachrauli</option>
            </select>            
        </div>
        <div className='w-auto border-2 border-black rounded-2xl grow-3 p-4'>
            <input placeholder='search by item name....'></input>
        </div>
    </div>
  )
}

export default SearchBar