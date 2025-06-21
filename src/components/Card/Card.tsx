import { useEffect } from "react";
import UseGetPokemons from "../../hooks/UseGetPokemons";
import SingleCard from "../SingleCard/SingleCard";
import "./Card.css";

const Card = () => {
  const { pokemon, fetchPokemon } = UseGetPokemons();

  useEffect(() => {
    fetchPokemon();
  }, [pokemon]);

  return (
    <div className="card">
      {pokemon.map((poke, idx) => (
        <SingleCard key={idx} pokemon={poke} />
      ))}
    </div>
  );
};

export default Card;
