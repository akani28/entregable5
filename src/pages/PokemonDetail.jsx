import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();

  const getPercentStat=(statValue)=>{
    const MAX_STAT_VALUE = 255
    const percentStat = ((100 * statValue)/MAX_STAT_VALUE).toFixed(1)
    return `${percentStat}%`

  }
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
    <main className="py-10 px-2 capitalize text-center">
      <article className="max-w-[500px] mx-auto">
        <header>
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <h3>{pokemon?.id}</h3>
        <h2>{pokemon?.name}</h2>
        <section>
          <h3 className="text-start">Stats</h3>
          <ul className="grid gap-4">
            {pokemon?.stats.map((stat) => (
              <li key={stat.stat.name}>
                <div className="flex justify-between items-center">
                  <h5>{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                <div className="bg-slate-200 rounded-md h-6 overflow-hidden">
                  <div style={{width:getPercentStat(stat.base_stat)}} className="bg-orange-400 h-full"></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
