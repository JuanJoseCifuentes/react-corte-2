import "./index.css";
import React, { useState, useEffect, useCallback } from "react";
import Pokedex from "pokedex-promise-v2";

import SearchBox from "../../components/SearchBox";
import PokemonCard from "../../components/PokemonCard";
import Paginated from "../../components/Paginated";

const interval = {
  limit: 151,
  offset: 0,
};

const total = 1025;

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searched, setSearched] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const handleSearch = (search) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearched(filtered);
  };

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    const pokedex = new Pokedex();
    const response = await pokedex.getPokemonsList({
      ...interval,
      offset: page * interval.limit,
    });
    const urls = response.results.map((pokemon) => pokemon.url);
    const pokemonsResponse = await pokedex.getResource(urls);
    setPokemons(pokemonsResponse);
    setSearched(pokemonsResponse);
    setLoading(false);
  }, [page, setPokemons, setSearched]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="App">
      <SearchBox onSearch={handleSearch} />
      <div className="pokedex">
        {loading && <p className="loading">Cargando...</p>}
        {!loading &&
          searched.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
          ))}
      </div>
      <Paginated page={page} total={total/interval.limit} setPage={setPage}></Paginated>
    </div>
  );
};

export default ListPokemon;
