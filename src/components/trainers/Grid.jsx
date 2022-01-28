import { useState, useEffect } from 'react'

import GridCard from './GridCard'

function Grid() {

  const [trainersList, setTrainersList] = useState([])

  useEffect( async () => {
    const response = await (await fetch('https://randomuser.me/api/?page=0&results=18&seed=rubeenvz')).json()
    setTrainersList(response.results)
  },[])

  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-4'>
      { trainersList.map((trainer, index) => {
        return ( <GridCard key={trainer.name.first} id={index} trainer={trainer} /> )
      }) }
    </div>
  )
}

export default Grid