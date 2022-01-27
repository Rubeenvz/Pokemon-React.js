import { useNavigate } from "react-router-dom"

import Breadcrumb from '../components/layout/Breadcrumb'
import Info from '../components/pokemon/Info'

function Pokemon() {

  const navigate = useNavigate()

  return (
    <div>
      <div>
        <Breadcrumb title="Pokemon"/>
      </div>
      <Info />
      <button className="button-primary mx-auto lg:mx-0" onClick={e => {navigate(-1)}}>
        Go back!
      </button>
    </div>
  )
}

export default Pokemon
