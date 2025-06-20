import React, { useEffect, useState } from 'react';
import './Card.css'
import instance from '../utils/axios';
import SingleCard from '../SingleCard/SingleCard';
import { Pokemon } from '../../types/pokemon-types';

const Card = () => {
        const [pokemon, setPokemon] = useState<Pokemon[]>([])

    useEffect(() => {
        instance.get('/pokemon').then((response) => {
           
            setPokemon(response.data.results)
        })
    },[])

    return (
        <div className='card'>
            {pokemon.map((poke, idx) => (
                <SingleCard key={idx} pokemon={poke}/>
            ))}
           
        </div>
    );
}

export default Card;
