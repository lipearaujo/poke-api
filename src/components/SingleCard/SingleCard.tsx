import React, { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon-types";
import "./SingleCard.css";
import { Link } from "react-router-dom";
import instance from "../utils/axios";

type Props = {
  pokemon: Pokemon;
};

const SingleCard = ({ pokemon }: Props) => {
  const [poke, setPoke] = useState<Pokemon | undefined>();

  useEffect(() => {
    instance.get(`/pokemon/${pokemon.name}`).then((response) => {
      setPoke(response.data);
    });
  }, []);

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
