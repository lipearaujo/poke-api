import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../components/utils/axios";
import { Pokemon } from "../types/pokemon-types";

const UseGetSinglePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const params = JSON.stringify(useParams().name).replaceAll(/"/g, "");

  const fetchSinglePokemon = () => {
    instance.get(`/pokemon/${params}`).then((response) => {
      setPokemon(response.data);
    });
  }

  return { pokemon, fetchSinglePokemon };
};

export default UseGetSinglePokemon;
