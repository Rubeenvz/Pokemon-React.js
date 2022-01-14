import IconShow from '../../img/icon_show.svg'

function TableRow({data}) {

  console.log(data.types)

  return (
    <tr className="text-left">
      <td className="hidden lg:table-cell">{data.id}</td>
      <td>
        <div className="flex gap-4 items-center">
          <div className="adm-user__img hidden lg:block">
            <img src={data.sprites.front_default} alt="{data.name}" />
          </div>
          <article className="text-sm text-primary font-open font-semibold capitalize">
            {data.name}
          </article>
        </div>
      </td>
      <td>
        {data.types.map((element) => {
          return (<p className="text-sm text-primary font-open capitalize">{element.type.name}</p>) 
        })}
      </td>
      <td><p className="text-sm text-primary font-open text-center">{data.weight/10} Kg</p></td>
      <td><p className="text-sm text-primary font-open text-center">{data.height/10} M</p></td>
      <td><p className="text-sm text-primary font-open text-center" >{data.base_experience} XP</p></td>
      <td>
        <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
          <article>
            <img alt="Icon" src={IconShow} />
          </article>
        </div>
      </td>
    </tr>
  )
}

export default TableRow