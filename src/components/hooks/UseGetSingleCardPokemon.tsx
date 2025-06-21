import React, { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon-types";
import instance from "../utils/axios";

type Props = {
  pokemon: Pokemon;
};

const UseGetSingleCardPokemon = ({ pokemon }: Props) => {
  const [poke, setPoke] = useState<Pokemon | undefined>();

  useEffect(() => {
    instance.get(`/pokemon/${pokemon.name}`).then((response) => {
      setPoke(response.data);
    });
  }, []);

  return { poke };
};

export default UseGetSingleCardPokemon;
