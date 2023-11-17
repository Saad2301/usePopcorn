import React, { useState } from 'react'
import Star from './Star'
const StarRating = ({maxRating,
    color = '#fcc419',
    size = '40',
    message=[],
    defaultRating=0,
    onMovieRate
}) => {
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, settempRating] = useState(0);

const containerStyle ={
    display: 'flex', alignItems: 'center' , gap:'10px'
};
const StarcontainerStyle ={
    display: 'flex', gap:'4px'
};
const textStyle={
    margin : '0',
    lineHeight:'1',
    color :`${color}`,
    fontSize:`${size/1.5}px`

}
const onRate=(i)=>{
    setRating(i + 1);
    onMovieRate(i+1);
}
const HoverIn=(i)=>{
    settempRating(i + 1);
}
const HoverOut=()=>{settempRating(0)}
  return (
    <div style={containerStyle}>
       <div style={StarcontainerStyle}>
        {
            Array.from({length : maxRating},(_,i)=>(
                <Star key={i}
                 onRate={() => onRate(i)}
                 full={tempRating ? tempRating >= i+1 : rating >= i+1}
                 onHoverIn={()=>HoverIn(i)}
                 onHoverOut={()=>HoverOut(i)}
                 color={color}
                 size={size}
                 />
            ))
        }
   </div>
        <p style={textStyle}>
            {message.length === maxRating ?
             message[tempRating ? tempRating-1 : rating-1] : tempRating || rating || ''}
            </p>
    </div>
  )
}

export default StarRating