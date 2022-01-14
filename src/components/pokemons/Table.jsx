import IconSearchGray from '../../img/icon_search-gray.svg'
import IconShow from '../../img/icon_show.svg'
import IconRight from '../../img/icon_right.svg'
import IconLeft from '../../img/icon_left.svg'

function Table() {

  return (
    <>
      <div>
        <div className="mt-6 flex justify-between flex-col-reverse lg:flex-row">
          <div className="flex gap-4 mt-6 lg:mt-0">
            <div className="flex items-center px-4 rounded-full bg-tertiary gap-4">
              <img alt="Icon" src={IconSearchGray} />
              <input v-model="search" className="bg-transparent font-normal text-sm text-primary font-open" type="text" placeholder="Search" />
            </div>
            <div>
              <button className="button-secondary">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 overflow-scroll">
          <table className="w-full">
            <tr className="text-left">
              <th className="hidden lg:table-cell"><input type="checkbox" /></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold">Pokemon</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold">Area</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold">Type</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold">Base Experience</p></th>
              <th><p className="text-sm text-primary font-montserrat font-semibold text-center">Detail</p></th>
            </tr>
            <tbody>
              <tr className="text-left">
                <td className="hidden lg:table-cell"><input type="checkbox" /></td>
                <td>
                  <div className="flex gap-4 items-center">
                    <div className="adm-user__img hidden lg:block"></div>
                    <article className="text-sm text-primary font-open font-semibold">
                      us.name us.last_name
                    </article>
                  </div>
                </td>
                <td><p className="text-sm text-primary font-open">area[us.area]</p></td>
                <td><p className="text-sm text-primary font-open">us.email</p></td>
                <td><p className="tag text-sm text-primary font-open" className="us.status" >status[us.status]</p></td>
                <td>
                  <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
                    <article>
                      <img alt="Icon" src={IconShow} />
                    </article>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <div className="flex justify-end gap-6 flex-col-reverse lg:flex-row">
            <div className="flex gap-6 flex-col lg:flex-row text-center">
              <p className="text-sm text-primary font-roboto">Rows per page :</p>
              <input className="w-full lg:w-max text-sm text-primary font-roboto text-center" v-model="pageSize" type="number" value="5" />
            </div>
            <div className="flex justify-center lg:block gap-6">
              <button className="py-4 px-4 lg:py-0 lg:px-4">
                <img alt="Left" src={IconLeft} />
              </button>
              <button className="py-4 px-4 lg:py-0 lg:px-4">
                <img alt="Right" src={IconRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table