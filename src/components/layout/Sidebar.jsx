import { Link, useParams } from 'react-router-dom'

import Logo from '../../img/logo.svg'
import IconPokemons from '../../img/icon_pokemons.svg'
import IconPokemon from '../../img/icon_pokemon.svg'
import IconExternal from '../../img/icon_external.svg'

function Nav({setResponsiveMenu}) {

  const params = useParams()

  return (
    <div className="flex flex-col h-full">
      <div className="main-sidebar__header">
        <div className="p-5 text-center">
          <img className="mx-auto" alt="Icon" src={Logo} />
        </div>
        <ul>
          <li>
            <Link to="/pokemon" className={`${params.id == undefined ? 'bg-tertiary' : ''} block border-b border-tertiary hover:bg-tertiary text-sm text-primary`}>
              <div className="py-3 ml-12 flex items-center content-center">
                <img className="mr-3" alt="Icon" src={IconPokemons} />
                <span className="font-open font-normal text-sm">Pokemons</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/pokemon" className={`${params.id != undefined ? 'bg-tertiary' : ''} block border-b border-tertiary hover:bg-tertiary text-sm text-primary`}>
              <div className="py-3 ml-12 flex items-center content-center">
                <img className="mr-3" alt="Icon" src={IconPokemon} />
                <span className="font-open font-normal text-sm">Pokemon</span>
              </div>
            </Link>
          </li>
          <li>
            <button onClick={e => setResponsiveMenu(false)} className="block bg-secondary text-sm text-primary w-full lg:hidden">
              <div className="py-3 flex items-center justify-center content-center text-center">
                <span className="font-open font-normal text-sm text-white">Close Menu</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className="main-sidebar__footer p-4">
        <Link to="/" className="mb-4 bg-tertiary rounded p-3 block">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-primary font-open font-normal">Log Out</p>
              <p className="underline text-xs text-primary font-open font-normal">Return to home page</p>
            </div>
            <div>
              <img alt="External" src={IconExternal} />
            </div>
          </div>
        </Link>
        <div className="pt-4 border-t border-tertiary text-center">
          <a className="text-xs text-primary font-open font-normal" href="https://rubeenvz.com/">© Copyright <span className="underline">Rubeenvz</span> 2022</a>
        </div>
      </div>
    </div>
  )
}

export default Nav