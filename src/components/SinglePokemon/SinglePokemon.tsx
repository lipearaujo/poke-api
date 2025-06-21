import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../utils/axios";
import { Link } from "react-router-dom";
import "./SinglePokemon.css";
import { Pokemon } from "../../types/pokemon-types";
import UseGetSinglePokemon from "../hooks/UseGetSinglePokemon";

type Props = {};

const SinglePokemon = (props: Props) => {
  const { pokemon } = UseGetSinglePokemon();

  return (
    <div className="container single-pokemon-container">
      <div className="">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "32px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "white",
            border: "1px solid white",
          }}
        >
          <span style={{ padding: "2px" }}>⬅</span>
        </Link>
      </div>

      <div className="pokemon-container">
        <div className="pokemon-single-image">
          <img
            src={pokemon ? pokemon.sprites["back_default"] : undefined}
            alt={`${pokemon?.name || null}`}
          />
        </div>
        <div className="pokemon-infos">
          <p>Id: {pokemon ? pokemon.id : "-"}</p>
          <p>Nome: {pokemon ? pokemon.name : "-"}</p>
          <p>Altura: {pokemon ? pokemon.height / 10 : "-"}m</p>
          <p>Peso: {pokemon ? pokemon.weight / 10 : "-"}kg</p>
          <p>
            Tipo:{" "}
            {pokemon
              ? pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")
              : "-"}
          </p>
          <p>
            Habilidades:{" "}
            {pokemon
              ? pokemon.abilities
                  .map((abilityInfo) => abilityInfo.ability.name)
                  .join(", ")
              : "-"}
          </p>
          <p>Experiência Base: {pokemon ? pokemon.base_experience : "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
