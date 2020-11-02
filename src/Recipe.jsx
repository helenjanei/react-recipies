import React from 'react';


const Recipe = ({title, time, image, link, ingredients}) => {
  return (
    <div className="recipe-outer">
      <h1 className="title">{title}</h1>
      <ul className="ingredients">
        {ingredients.map(ingredient => (
          <li className="ingredient.text">{ingredient.text}</li>
        ))}
      </ul>
      <p className="time">Total Time: {time} mins</p>
     <a href={link}>
     <img src={image} alt="" />
     </a>
    </div>
  )
}

export default Recipe