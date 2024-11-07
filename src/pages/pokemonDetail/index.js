import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Pokedex from 'pokedex-promise-v2';
import PokemonDetailPresentational from "../../presentational/pokemonDetailPresetational";

const DetailPokemon = () => {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const pokedex = new Pokedex();
        const response = await pokedex.getResource(
          `/api/v2/pokemon/${idPokemon}`
        );
        setPokemon(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPokemon();
  }, [idPokemon]);

  return (
    <PokemonDetailPresentational pokemon={pokemon} loading={loading} />
  );
};

export default DetailPokemon;
