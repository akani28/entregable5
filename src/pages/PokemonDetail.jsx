import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();
  console.log(pokemonId);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(({ data }) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <article>
      <main>
        <header>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <h3>{pokemon?.id}</h3>
        <h2>{pokemon?.name}</h2>
        <section>
          <h3>Stats</h3>
          <ul>
            {
              pokemon?.stats.map((stats)=><li>
                <div>
                  <h5></h5>
                  <span></span>
                </div>
              </li>)
            }
          </ul>
        </section>
      </main>
    </article>
  );
};

export default PokemonDetail;
