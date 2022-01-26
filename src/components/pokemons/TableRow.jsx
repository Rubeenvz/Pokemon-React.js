import { Link } from 'react-router-dom'

import IconShow from '../../img/icon_show.svg'

function TableRow({data}) {

  return (
    <tr className="text-left">
      <td className="hidden lg:table-cell text-sm text-primary font-open">{data.id}</td>
      <td>
        <Link to={`/pokemon/${data.id}`} className="flex gap-4 items-center">
          <div className="main-pokemon__img">
            <img className="primary" src={data.sprites.front_default} alt={data.name} />
            <img className="secondary" src={data.sprites.front_shiny} alt={data.name} />
          </div>
          <p className="text-sm text-primary font-open font-semibold capitalize hidden lg:block">
            {data.name}
          </p>
        </Link>
      </td>
      <td>
        {data.types.map((element) => {
          return (<p key={element.type.name} className={`${element.type.name} text-sm text-primary font-open capitalize tag`}>{element.type.name}</p>) 
        })}
      </td>
      <td><p className="text-sm text-primary font-open text-center">{data.weight/10} Kg</p></td>
      <td><p className="text-sm text-primary font-open text-center">{data.height/10} M</p></td>
      <td><p className="text-sm text-primary font-open text-center" >{data.base_experience} XP</p></td>
      <td>
        <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
          <Link to={`/pokemon/${data.id}`}>
            <img alt="Icon" src={IconShow} />
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default TableRow