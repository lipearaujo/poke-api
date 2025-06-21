import React, { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon-types";
import instance from "../utils/axios";

const UseGetPokemons = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    instance.get("/pokemon?limit=100&offset=0").then((response) => {
      setPokemon(response.data.results);
    });
  }, []);

  return { pokemon };
};

export default UseGetPokemons;

//pokemon?limit=100&offset=0
