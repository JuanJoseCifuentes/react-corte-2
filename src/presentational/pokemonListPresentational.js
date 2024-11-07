import React from "react";
import SearchBox from "../components/SearchBox";
import PokemonCard from "../components/PokemonCard";
import Paginated from "../components/Paginated";
import "../pages/pokemonList/index.css";

const PokemonListPresentational = ({
  pokemons,
  loading,
  page,
  totalPages,
  setPage,
}) => {
  return (
    <div className="App">
      <div className="pokedex">
        {loading && <p className="loading">Cargando...</p>}
        {!loading &&
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
          ))}
      </div>
      <Paginated page={page} total={totalPages} setPage={setPage}></Paginated>
    </div>
  );
};

export default PokemonListPresentational;
