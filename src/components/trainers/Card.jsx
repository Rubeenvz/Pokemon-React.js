import react, { useContext } from 'react'

import { TrainersContext } from '../../context/TrainersContext'

function Card() {

  const { currentTrainer }  = useContext(TrainersContext)

  return (
    <div>Card</div>
  )
}

export default Card
