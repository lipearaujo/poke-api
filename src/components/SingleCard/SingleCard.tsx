import { Pokemon } from "../../types/pokemon-types";
import { Link } from "react-router-dom";
import "./SingleCard.css";
import UseGetSingleCardPokemon from "../hooks/UseGetSingleCardPokemon";

type Props = {
  pokemon: Pokemon;
};

const SingleCard = ({ pokemon }: Props) => {
  const { poke } = UseGetSingleCardPokemon({ pokemon });

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
