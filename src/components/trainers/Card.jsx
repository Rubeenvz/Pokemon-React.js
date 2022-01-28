import { useContext } from 'react'

import { TrainersContext } from '../../context/TrainersContext'

function Card() {

  const { currentTrainer }  = useContext(TrainersContext)

  return (
    <div className="trainer-card__container mx-auto overflow-hidden bg-white shadow-lg rounded-full">
      <div className='w-full h-full flex flex-col justify-between items-center'>
        <div className="w-full h-1/2 bg-secondary relative flex items-center justify-center overflow-hidden">
          <div className='absolute opacity-40'>
            {currentTrainer.pokemon && <img className='w-full h-full object-cover' src={currentTrainer.pokemon.sprites.front_default} alt={currentTrainer.name.title} /> }
          </div>
        </div>
        <div className='trainer-card__stripe w-full bg-black'></div>
        <div className='relative flex flex-col justify-center text-center w-full h-1/2'>
          <div className='trainer-card__img bg-black mx-auto border-black left-0 right-0 absolute rounded-full overflow-hidden'>
            {currentTrainer.picture && <img className='w-full h-full object-cover' src={currentTrainer.picture.large} alt={currentTrainer.name.title} /> }
          </div>
          {currentTrainer.name && <h2 className='text-sm text-primary font-open font-semibold capitalize hidden lg:block'>{currentTrainer.name.title} {currentTrainer.name.first} {currentTrainer.name.last}</h2> }
          {currentTrainer.location && <p className='text-sm text-primary font-open capitalize hidden lg:block'>{currentTrainer.location.city} {currentTrainer.location.country}</p> }
          {currentTrainer.location && <p className='text-sm text-primary font-open capitalize hidden lg:block'>{currentTrainer.location.postcode} XP</p> }
        </div>
      </div>
    </div>
  )
}

export default Card
