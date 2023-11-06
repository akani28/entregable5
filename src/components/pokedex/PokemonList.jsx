import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_200px)] justify-center max-w-[1200px] mx-auto">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>
      ))}
    </section>
  );
};

export default PokemonList;
