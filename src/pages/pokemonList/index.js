import React, { useState } from 'react';
import usePokemons from '../../hooks/usePokemons';
import {usePokemonCtx} from '../../context/pokemonCtx';
import PokemonListPresentational from '../../presentational/pokemonListPresentational';

const ListPokemon = () => {
    usePokemons();
    const {pokemons, loading, metadata: {total, limit}} = usePokemonCtx();
    const [page, setPage] = useState(0);

    const totalPages = total/limit;

    return (
      
      <PokemonListPresentational 
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
      />
    );
  };

export default ListPokemon;