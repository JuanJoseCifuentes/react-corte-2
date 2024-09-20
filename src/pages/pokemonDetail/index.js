import "./index.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";

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
    <>
      {!loading && pokemon && (
        <div id="borde">
          <img id="foto" src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          <div id="info">
            <div id="header">
              {pokemon.name}
              <div id="typeTag">{pokemon.types[0].type.name}</div>
              <div id="desc">Tiny Turtle Pokemon</div>
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
      )}
      {loading && <p>Loading...</p>}
      {!loading && !pokemon && <p>Pokemon not found 404</p>}
      <Link to="/" id="back">Back</Link>
    </>
  );
};

export default DetailPokemon;
