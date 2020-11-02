import React from 'react';


const Recipe = ({title, time, image}) => {
  return (
    <div className="recipe-outer">
      <h1 className="title">{title}</h1>
      <p className="time">Total Time: {time}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default Recipe