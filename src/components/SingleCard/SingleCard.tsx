import { Pokemon } from "../../types/pokemon-types";
import { Link } from "react-router-dom";
import "./SingleCard.css";
import UseGetSingleCardPokemon from "../../hooks/UseGetSingleCardPokemon";
import { useEffect } from "react";

type Props = {
  pokemon: Pokemon;
};

const SingleCard = ({ pokemon }: Props) => {
  const { poke, fetchSinglePokemon } = UseGetSingleCardPokemon();

  useEffect(() => {
    fetchSinglePokemon(pokemon);
  }, [poke]);

  return (
    <Link to={`/pokemon/${pokemon.name}`} className="single-card">
      <div className="pokemon-image">
        <img
          src={poke ? poke.sprites["back_default"] : undefined}
          alt={`${null}`}
        />
      </div>
      <p style={{ fontWeight: "bold" }}>{pokemon.name}</p>
    </Link>
  );
};

export default SingleCard;
