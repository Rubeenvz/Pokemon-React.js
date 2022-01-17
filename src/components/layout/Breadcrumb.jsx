import { Link } from 'react-router-dom'

function Breadcrumb({title}) {
  return (
    <div>
      <div>
        <Link className="text-primary text-base font-open font-normal" to="/">Home</Link> <span className="text-secondary text-base font-open font-normal"> > {title}</span>
      </div>
      <h1 className="font-semibold text-xl font-montserrat text-primary">{title}</h1>
    </div>
  )
}

export default Breadcrumb