import SingleCard from "../SingleCard/SingleCard";
import UseGetPokemons from "../hooks/UseGetPokemons";
import "./Card.css";

const Card = () => {
  const { pokemon } = UseGetPokemons();

  return (
    <div className="card">
      {pokemon.map((poke, idx) => (
        <SingleCard key={idx} pokemon={poke} />
      ))}
    </div>
  );
};

export default Card;
