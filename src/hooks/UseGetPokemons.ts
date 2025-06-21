import React, { useEffect, useState } from "react";
import instance from "../components/utils/axios";
import { Pokemon } from "../types/pokemon-types";

const UseGetPokemons = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const fetchPokemon = () => {
    instance.get("/pokemon?limit=100&offset=0").then((response) => {
      setPokemon(response.data.results);
    });
  }

  return { pokemon, fetchPokemon };
};

export default UseGetPokemons;