import React, { useEffect, useState } from "react";
import instance from "../components/utils/axios";
import { Pokemon } from "../types/pokemon-types";

const UseGetSingleCardPokemon = () => {
  const [poke, setPoke] = useState<Pokemon | undefined>();

  const fetchSinglePokemon = (pokemon: Pokemon) => {
       instance.get(`/pokemon/${pokemon.name}`).then((response) => {
      setPoke(response.data);
    });
  }

  return { poke, fetchSinglePokemon };
};

export default UseGetSingleCardPokemon;
