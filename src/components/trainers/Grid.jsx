import react, { useContext } from 'react'

import { TrainersContext } from '../../context/TrainersContext'

function Grid() {

  const { currentTrainer }  = useContext(TrainersContext)

  return (
    <div>Grid</div>
  )
}

export default Grid