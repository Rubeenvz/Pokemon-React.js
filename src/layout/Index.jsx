import { Link } from 'react-router-dom'

import Logo from '../img/logo.svg'

function Index() {
  
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-1/2 bg-quaternary flex justify-center items-center"></div>
      <div className="general-pokeball__strip absolute w-full translate-y--1/2 bg-black left-0 top-1/2">
        <Link to="/pokemon" className="general-pokeball__button flex justify-center items-center bg-white rounded-full border border-black ">
          <span className="font-semibold text-xl font-montserrat text-black">Go!</span>
        </Link>
      </div>
      <div className="h-1/2 bg-white flex justify-center items-end">
        <div className="mb-4">
          <a className="font-semibold text-xl font-montserrat text-black" href="https://rubeenvz.com/" target="_blank">Made with <span className="text-quaternary">&lt;3</span> by Rubeenvz</a>
        </div>
      </div>
    </div>
  )
}

export default Index
