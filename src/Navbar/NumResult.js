import React from 'react'

const NumResult = ({movies}) => {
  return (
    <div className='num-result'>
      <p>
        Found <strong>
          {movies ? `${movies.length}` : 'loading...'}
          </strong> results
      </p>
    </div>
  )
}

export default NumResult