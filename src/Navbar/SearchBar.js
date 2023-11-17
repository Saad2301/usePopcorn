import React, { useState } from 'react'

const SearchBar = ({query,setQuery}) => {
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setQuery(value)
  }
  return (
    <div> 
      <input
      className='search'
      name='query'
      type='text'
      placeholder='search movies..'
      value={query}
      onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar