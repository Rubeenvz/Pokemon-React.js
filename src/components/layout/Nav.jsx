import { Link } from 'react-router-dom'

import Iconlogout from '../../img/icon_logout.svg'

function Nav({setResponsiveMenu}) {

  return (
    <div className="flex justify-between lg:justify-end w-full py-5 px-6 lg:px-16 bg-secondary">
      <button onClick={e => setResponsiveMenu(true)} className="text-white text-sm font-roboto font-medium lg:hidden">
        MENU
      </button>
      <div className="flex items-center">
        <div className="hidden lg:flex border-r border-white lg:mx-9 h-full"></div>
        <div className="flex items-center flex-row-reverse lg:flex-row lg:mr-7 gap-2">
          <div className="main-nav__pokemon bg-white rounded-full"></div>
          <div className="text-right lg:text-left">
            <p className="text-white text-sm font-roboto font-medium">Created by:</p>
            <a href="https://rubeenvz.com/" className="text-white text-sm font-roboto font-medium">Rubeenvz</a>
          </div>
        </div>
        <Link to="/" className="hidden lg:flex">
          <img className="mr-3" alt="Icon" src={Iconlogout} />
        </Link>
      </div>
    </div>
  )
}

export default Nav
