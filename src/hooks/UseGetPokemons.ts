import React, { useEffect, useState } from "react";
import instance from "../components/utils/axios";
import { Pokemon } from "../types/pokemon-types";

const UseGetPokemons = (pageLimit: number) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const fetchPokemon = (page: number) => {
    const virtulPage = ((page - 1) * pageLimit ) <= 0 ? 0 : ((page - 1) * pageLimit )

    instance.get(`/pokemon?limit=${pageLimit}&offset=${virtulPage}`).then((response) => {
      setPokemon(response.data.results);
    });
  }

  return { pokemon, fetchPokemon };
};

export default UseGetPokemons;