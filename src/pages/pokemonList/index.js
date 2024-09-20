import "./index.css";
import React, { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";
import { useNavigate } from "react-router-dom";

const interval = {
  limit: 150,
  offset: 0,
};

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    const getPokemons = async () => {
      const pokedex = new Pokedex();
      const response = await pokedex.getPokemonsList(interval);
      const urls = response.results.map((pokemon) => pokemon.url);
      const PokemonsResponse = await pokedex.getResource(urls);
      setPokemons(PokemonsResponse);
    };
    getPokemons();
  }, []);

  return (
    <div className="App">
      <div className="pokedex">
        {pokemons.map((pokemon, index) => (
          <div className="pokemon" onClick={() => handleClick(pokemon.id)}>
            <img
              id="foto"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            ></img>
            <div id="info">
              <div id="header">
                {pokemon.name}
                <div id="typeTag">{pokemon.types[0].type.name}</div>
              </div>
              <div id="tags">
                <div class="tag">
                  <div>HP</div>
                  <div class="content">1008</div>
                </div>
                <div class="tag">
                  <div>CP</div>
                  <div class="content">891</div>
                </div>
                <div class="tag">
                  <div>W</div>
                  <div class="content">{pokemon.weight}kg</div>
                </div>
                <div class="tag">
                  <div>H</div>
                  <div class="content">{pokemon.height}m</div>
                </div>
              </div>
            </div>
            <div id="num">{pokemon.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPokemon;
