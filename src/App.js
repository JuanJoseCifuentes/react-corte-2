import "./App.css";
import { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";

const interval = {
  limit: 151,
  offset: 0,
};

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const pokedex = new Pokedex();
      const response = await pokedex.getPokemonsList(interval);
      const urls = response.results.map((pokemon) => pokemon.url);
      const pokemonsResponse = await pokedex.getResource(urls);
      setPokemons(pokemonsResponse);
    }

    getPokemons();
  }, []);

  return (
    <div className="App">
      {pokemons.map((pokemon) => (
        <div className="card">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon?.name} />
          <div>Height: {pokemon.height}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
