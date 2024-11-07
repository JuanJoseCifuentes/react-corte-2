import React from "react";
import { Link } from "react-router-dom";
import '../pages/pokemonDetail/index.css';

const PokemonDetailPresentational = ({
    pokemon,
    loading,
  }) => {return (
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
              <div className="tag">
                <div>HP</div>
                <div className="content">1008</div>
              </div>
              <div className="tag">
                <div>CP</div>
                <div className="content">891</div>
              </div>
              <div className="tag">
                <div>W</div>
                <div className="content">{pokemon.weight}kg</div>
              </div>
              <div className="tag">
                <div>H</div>
                <div className="content">{pokemon.height}m</div>
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

export default PokemonDetailPresentational;