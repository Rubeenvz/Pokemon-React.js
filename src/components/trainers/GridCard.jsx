import { useContext } from 'react'

import { TrainersContext } from '../../context/TrainersContext'

function GridCard({id, trainer}) {

  const { setCurrentTrainer }  = useContext(TrainersContext)

  const action = async (id) => {
    const userResponse = await (await fetch(`https://randomuser.me/api/?page=0&results=1`)).json()
    let user = await userResponse.results[0]
    const pokemonResponse = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${user.dob.age}`)).json()
    user.pokemon = pokemonResponse
    setCurrentTrainer(user)
  }

  return (
    <div className='p-4 shadow-lg transition-all duration-300 hover:bg-tertiary text-center rounded-t-md' onMouseEnter={() => action(id)}>
      <p className='text-sm text-primary font-open font-semibold capitalize hidden lg:block'>{trainer.name.title} {trainer.name.first} {trainer.name.last}</p>
    </div>
  )
}

export default GridCard