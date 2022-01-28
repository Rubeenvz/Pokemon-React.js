import TrainersContext from '../context/TrainersContext'

import Breadcrumb from '../components/layout/Breadcrumb'
import Grid from '../components/trainers/Grid'
import Card from '../components/trainers/Card'

function Trainers() {

  return (
    <div>
      <div>
        <Breadcrumb title="Trainers"/>
      </div>
      <TrainersContext>
        <div className="flex items-center flex-col gap-8">
          <div className="w-full max-w-lg">
            <Card />
          </div>
          <div className="w-full">
            <Grid />
          </div>
        </div>
      </TrainersContext>
    </div>
  )
}

export default Trainers
