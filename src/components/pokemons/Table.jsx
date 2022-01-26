import { useState, useEffect } from 'react'

import TableRow from './TableRow'

import IconRight from '../../img/icon_right.svg'
import IconLeft from '../../img/icon_left.svg'

function Table() {

  const [pokemons, setPokemons] = useState([])
  const [resultsPerPage, setResultsPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(0)

  const getPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${resultsPerPage}&offset=${currentPage}`
    const response = await (await fetch(url)).json()
    let pokemons = await Promise.all(response.results.map(async (element) => {
      let pokemon = await (await fetch(element.url)).json()
      return pokemon
    }))
    setPokemons(pokemons)
  }

  useEffect( () => {
    getPokemons()
  },[])

  useEffect( () => {
    getPokemons()
  },[resultsPerPage])

  useEffect( () => {
    getPokemons()
  },[currentPage])

  let timeoutId = 0
  const resultsPerPageHandler = (value) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      setCurrentPage(0)
      setResultsPerPage(value)
    }, 100)
  }

  const currentPageHandler = (value) => {
    let offset = resultsPerPage*value
    if((currentPage + offset) < 0)
      return
    setCurrentPage(currentPage + offset)
  }

  return (
    <>
      <div>
        <div className="mt-6 overflow-scroll">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="text-sm text-primary font-montserrat hidden lg:table-cell">ID</th>
                <th><p className="text-sm text-primary font-montserrat font-semibold">Pokemon</p></th>
                <th><p className="text-sm text-primary font-montserrat font-semibold">Types</p></th>
                <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Weight</p></th>
                <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Height</p></th>
                <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Base</p></th>
                <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Detail</p></th>
              </tr>
            </thead>
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
              <input className="w-full lg:w-max text-sm text-primary font-roboto text-center" type="number" value={resultsPerPage} onChange={e => resultsPerPageHandler(e.target.value)} />
            </div>
            <div className="flex justify-center lg:block gap-6">
              <button onClick={e => currentPageHandler(-1)} className="py-4 px-4 lg:py-0 lg:px-4">
                <img alt="Left" src={IconLeft} />
              </button>
              <button onClick={e => currentPageHandler(+1)} className="py-4 px-4 lg:py-0 lg:px-4">
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