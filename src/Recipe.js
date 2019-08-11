import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,recipeurl}) => {
    return(
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.round(calories)}</p>
            <img className = {style.image} src = {image} alt = ""/>
            <p>Recipe url:<a href = "#">{recipeurl}</a></p>
        </div>
    );
}

export default Recipe;