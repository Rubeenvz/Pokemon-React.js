import IconSearch from '../../img/icon_search.svg'
import Iconlogout from '../../img/icon_logout.svg'

function Nav() {

  return (
    <div className="flex justify-between lg:justify-end w-full py-5 px-6 lg:px-16 bg-secondary">
    <button className="text-white text-sm font-roboto font-medium lg:hidden">
      MENU
    </button>
    <div className="flex items-center">
      <div className="hidden lg:flex items-center">
        <input id="input_search" className="mr-4 bg-secondary text-white" type="text" />
        <label htmlFor="input_search">
          <img className="mr-3" alt="Icon" src={IconSearch} />
        </label>
      </div>
      <div className="hidden lg:flex border-r border-white lg:mx-9 h-full"></div>
      <div className="flex items-center flex-row-reverse lg:flex-row lg:mr-7 gap-2">
        <div className="main-nav__user bg-white rounded-full"></div>
        <div className="text-right lg:text-left">
          <p className="text-white text-sm font-roboto font-medium">Created by:</p>
          <a href="https://rubeenvz.com/" className="text-white text-sm font-roboto font-medium">Rubeenvz</a>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img className="mr-3" alt="Icon" src={Iconlogout} />
      </div>
    </div>
  </div>
  )
}

export default Nav
