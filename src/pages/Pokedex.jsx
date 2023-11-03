import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/pokedex/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const trainerName = useSelector((store) => store.trainerName);
  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
  };
  const handleType = (e) => {
    setCurrentType(e.target.value);
  };
  useEffect(() => {
    if(currentType==""){
      axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(({ data }) => {
        setPokemons(data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    }
    
  }, [currentType]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => {
        setTypes(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (currentType !="") {
    
      axios
        .get(`https://pokeapi.co/api/v2/type/${currentType}/`)
        .then(({ data }) => {
          setPokemons(data.pokemon.map((pokemon)=>pokemon.pokemon));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentType]);
  return (
    <main>
      <section>
        <p>
          <span>Welcome {trainerName}</span>, here you find favorite pokemon
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <input name="pokemonName" type="text" />
            <button>Search</button>
          </div>
          <select onChange={handleType}>
            <option className="capitalize" value="">
              All pokemons
            </option>
            {types.map((type) => (
              <option value={type.name} key={type.url}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>
      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};

export default Pokedex;
