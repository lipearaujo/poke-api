import { useEffect } from "react";
import UseGetPokemons from "../../hooks/UseGetPokemons";
import SingleCard from "../SingleCard/SingleCard";
import UsePagination from "../../hooks/UsePagination";
import "./Card.css";

const pageLimit = 20;

const Card = () => {
  const { pokemon, fetchPokemon } = UseGetPokemons(pageLimit);
  const { actualPage, setActualPage } = UsePagination();

  useEffect(() => {
    fetchPokemon(actualPage);
  }, [actualPage]);

  return (
    <div>
      <div className="card">
        {pokemon.map((poke, idx) => (
          <SingleCard key={idx} pokemon={poke} />
        ))}
      </div>
      <div className="paginationButtons">
        {Array(5)
          .fill("")
          .map((_, idx) => {
            return (
              <button key={idx} onClick={() => setActualPage(idx + 1)}>
                {idx + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
