import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';



export const CardList = props => (
	
	
    <div className='card-list'>
        {props.pokemonBalls.map(pokemon =>(

        <Card key={pokemon.name} pokemon={pokemon}></Card>
        ))}
        

    </div>
);
