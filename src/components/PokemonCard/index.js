import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css"

const PokemonCard = ({pokemon}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/detail/${id}`);
    };
  
    return (<div>
        <div className="id">{pokemon.id}</div>
        <div className="pokemon" onClick={() => handleClick(pokemon.id)}>
          <img
            id="foto"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          ></img>
          <div id="info">
            <div id="name">{pokemon.name}</div>
            {/*
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
          */}
          </div>
        </div>
      </div>);
}

export default PokemonCard;