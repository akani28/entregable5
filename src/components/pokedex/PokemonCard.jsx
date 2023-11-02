import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonCard = ({pokemonUrl}) => {
  const [pokemon, setPokemon] = useState(null)
    useEffect(()=>{
        axios
        .get(pokemonUrl)
        .then(({data})=>{
          setPokemon(data)
          console.log(data)})
        .catch((err)=>{console.log(err);})
    },[])
  return (
    <article className='capitalize'>
      <header></header>
      <div>
        <div>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="front image" />
        </div>
        <h3>{pokemon?.name}</h3>
        <span>{pokemon?.types.map((type)=> type.type.name).join(" / ")}</span>
        <h5>type</h5>
        <ul>
          {pokemon?.stats.slice(0,4).map((stat) =>(
            <li key={stat.stat.name}>
              <h6>{stat.stat.name}</h6>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>

    </article>
  )
}

export default PokemonCard