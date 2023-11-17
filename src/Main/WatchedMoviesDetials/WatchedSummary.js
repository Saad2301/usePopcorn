import React from 'react'

const WatchedSummary = ({watched}) => {
    const average =(arr)=>{
        return arr.reduce((acc,cur)=>acc + cur,0)/arr.length
      }
      const avgImdbRating = average(watched.map((movie)=> movie.imdbRating));
      const avgUserRating = average(watched.map((movie)=> movie.rating));
      const avgRuntime = average(watched.map((movie)=> movie.Runtime));
  return (
    <div className='summary'>
        <h2>Movies you watched</h2>
        <div>
            <p>
                <span>#️⃣</span>
                <span>{watched.length}</span>
            </p>

            <p>
                <span>⭐</span>
                <span>{avgImdbRating.toFixed(2)}</span>
            </p>
            <p>
                <span>✨</span>
                <span>{avgUserRating}</span>
            </p>

            <p>
                <span>⌚</span>
                <span>{avgRuntime}</span>
            </p>

        </div>
        </div>
  )
}

export default WatchedSummary