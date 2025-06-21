import React, { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon-types";
import instance from "../utils/axios";
import { useParams } from "react-router-dom";

const UseGetSinglePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const params = JSON.stringify(useParams().name).replaceAll(/"/g, "");

  useEffect(() => {
    instance.get(`/pokemon/${params}`).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  return { pokemon };
};

export default UseGetSinglePokemon;
