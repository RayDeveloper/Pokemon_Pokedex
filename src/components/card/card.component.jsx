import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`} />
        <h2>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
        <p>{props.pokemon.url}</p>		
    </div>
)