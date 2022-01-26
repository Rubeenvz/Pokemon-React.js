import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Info() {

  const params = useParams()

  const [pokemon, setPokemon] = useState({})

  const getPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`
    const response = await (await fetch(url)).json()
    setPokemon(response)
  }

  useEffect( () => {
    getPokemon()
  },[])
  
  return (
    <div className="pt-6 mb-9">
      <div className="mb-6">
        <div className="flex gap-4 max-w-md lg:mx-0 mx-auto">
          <div className="main-pokemon__img mx-auto lg:mx-0">
            {pokemon.sprites && <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
          </div>
          <div className="main-pokemon__img mx-auto lg:mx-0">
            {pokemon.sprites && <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />}
          </div>
        </div>
        <div className="mt-4 text-center lg:text-left">
          <h2 className="font-open font-semibold text-primary">#{pokemon.id} - <span className='capitalize'>{pokemon.name}</span>  </h2>
        </div>
      </div>
      <div className="info-pokemon__grid grid text-center lg:text-left">
        <div>
          <p className="font-normal text-xs uppercase text-primary font-open">Name</p>
          <p className="font-semibold text-base text-primary font-open capitalize">{pokemon.name}</p>
        </div>
        <div>
          <p className="font-normal text-xs uppercase text-primary font-open">Types</p>
          {pokemon.types && pokemon.types.map((element) => {
            return (<p key={element.type.name}  className={`${element.type.name} font-semibold text-base text-primary font-open capitalize tag`}>{element.type.name}</p>) 
          })}
        </div>
        <div>
          <p className="font-normal text-xs uppercase text-primary font-open">Abilities</p>
          {pokemon.abilities && pokemon.abilities.map((element) => {
            return (<p key={element.ability.name}  className="font-semibold text-base text-primary font-open capitalize">{element.ability.name}</p>) 
          })}
        </div>
        <div>
          <p className="font-normal text-xs uppercase text-primary font-open">Weight</p>
          <p className="font-semibold text-base text-primary font-open">{pokemon.weight/10} Kg</p>
        </div>
        <div>
          <p className="font-normal text-xs uppercase text-primary font-open">Height</p>
          <p className="font-semibold text-base text-primary font-open">{pokemon.height/10} M</p>
        </div>
        <div>
          <p className="font-normal text-xs uppercase text-primary font-open">Base</p>
          <p className="font-semibold text-base text-primary font-open">{pokemon.base_experience} XP</p>
        </div>
      </div>
    </div>
  )
}

export default Info
