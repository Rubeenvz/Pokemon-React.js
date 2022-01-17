import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Nav from '../components/layout/Nav'
import Sidebar from '../components/layout/Sidebar'

function Dashboard() {

  const [responsiveMenu, setResponsiveMenu] = useState(false)
  
  return (
    <div className="main-grid__container min-h-screen lg:grid grid-flow-col">
      <div className={`${responsiveMenu ? 'active' : ''} main-grid__first z-50 h-full fixed lg:relative lg:border-r border-tertiary w-full bg-white transition-all ease-in-out duration-300`} id="Sidebar">
        <Sidebar setResponsiveMenu={setResponsiveMenu} />
      </div>
      <div className="main-grid__second h-full w-full">
        <div>
          <Nav setResponsiveMenu={setResponsiveMenu} />
        </div>
        <div className="p-6">
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
