import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/pokedex/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState()
  const trainerName = useSelector((store) => store.trainerName);
  useEffect(()=>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(({data})=>{setPokemons(data.results);})
    .catch((err)=>{console.log(err);})
  },[])
  return (
    <main>
      <section>
        <p>
          <span>Welcome {trainerName}</span>
          , here you find favorite pokemon
        </p>
        <form action="">
          <div>
            <input type="text" />
            <button>Search</button>
          </div>
          <select>
            <option value="All pokemons">All pokemons</option>
          </select>
        </form>
      </section>
      <PokemonList pokemons={pokemons} />
    </main>
  );
};

export default Pokedex;
