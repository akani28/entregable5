import axios from 'axios'
import React, { useEffect } from 'react'

const PokemonCard = ({pokemonUrl}) => {
    useEffect(()=>{
        axios
        .get(pokemonUrl)
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err);})
    },[])
  return (
    <article>PokemonCard</article>
  )
}

export default PokemonCard