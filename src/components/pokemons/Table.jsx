import { useState, useEffect } from 'react'

import TableRow from './TableRow'

import IconSearchGray from '../../img/icon_search-gray.svg'
import IconRight from '../../img/icon_right.svg'
import IconLeft from '../../img/icon_left.svg'

function Table() {

  const [pokemons, setPokemons] = useState([])

  useEffect(async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await (await fetch(url)).json()
    let pokemons = await Promise.all(response.results.map(async (element) => {
      let pokemon = await (await fetch(element.url)).json()
      return pokemon
    }))
    setPokemons(pokemons)
    
  },[])

  return (
    <>
      <div>
        <div className="mt-6 flex justify-between flex-col-reverse lg:flex-row">
          <div className="flex gap-4 mt-6 lg:mt-0">
            <div className="flex items-center px-4 rounded-full bg-tertiary gap-4">
              <img alt="Icon" src={IconSearchGray} />
              <input v-model="search" className="bg-transparent font-normal text-sm text-primary font-open" type="text" placeholder="Search" />
            </div>
            <div>
              <button className="button-secondary">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 overflow-scroll">
          <table className="w-full">
            <tr className="text-left">
              <th className="hidden lg:table-cell">ID</th>
              <th><p className="text-sm text-primary font-montserrat font-semibold">Pokemon</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold">Type</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Weight</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Height</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Base</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Detail</p></th>
            </tr>
            <tbody>
            {pokemons.map((pokemon) => {
              return (<TableRow key={pokemon.id} data={pokemon} />) 
            })}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <div className="flex justify-end gap-6 flex-col-reverse lg:flex-row">
            <div className="flex gap-6 flex-col lg:flex-row text-center">
              <p className="text-sm text-primary font-roboto">Rows per page :</p>
              <input className="w-full lg:w-max text-sm text-primary font-roboto text-center" v-model="pageSize" type="number" value="5" />
            </div>
            <div className="flex justify-center lg:block gap-6">
              <button className="py-4 px-4 lg:py-0 lg:px-4">
                <img alt="Left" src={IconLeft} />
              </button>
              <button className="py-4 px-4 lg:py-0 lg:px-4">
                <img alt="Right" src={IconRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table