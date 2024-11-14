import React, {Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../pages/pokemonList/index.css";

const SearchBox = React.lazy(() => import("../components/SearchBox"))
const Paginated = React.lazy(() => import("../components/Paginated"))
const PokemonCard = React.lazy(() => import("../components/PokemonCard"));

const PokemonListPresentational = ({
  pokemons,
  loading,
  page,
  totalPages,
  setPage,
}) => {
  return (
    <div className="App">
      <Suspense fallback={<span> Cargando... </span>}></Suspense>
      <SearchBox></SearchBox>
      <div className="pokedex">
        {loading && <p className="loading">Cargando...</p>}
        {!loading &&
          pokemons.map((pokemon) => (
            <PokemonCardOnView key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
      <Paginated page={page} total={totalPages} setPage={setPage}></Paginated>
    </div>
  );
};

const PokemonCardOnView = ({ pokemon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo dispara cuando el componente entra en vista por primera vez
    threshold: 0.1, // Disparar cuando el 10% del componente esté visible
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<div>Cargando...</div>}>
          <PokemonCard pokemon={pokemon} />
        </Suspense>
      ) : (
        <span>Esperando a que el Pokémon esté visible...</span>
      )}
    </div>
  );
};


export default PokemonListPresentational;
