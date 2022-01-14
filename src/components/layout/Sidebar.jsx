import Logo from '../../img/logo.svg'
import IconPokemons from '../../img/icon_pokemons.svg'
import IconPokemon from '../../img/icon_pokemon.svg'
import IconExternal from '../../img/icon_external.svg'

function Nav() {

  return (
    <div className="flex flex-col h-full">
      <div className="main-sidebar__header">
        <div className="p-5 text-center">
          <img className="mx-auto" alt="Icon" src={Logo} />
        </div>
        <ul>
          <li>
            <article exact className="block border-b border-tertiary hover:bg-tertiary text-sm text-primary" to="/">
              <div className="py-3 ml-12 flex items-center content-center">
                <img className="mr-3" alt="Icon" src={IconPokemons} />
                <span className="font-open font-normal text-sm">Pokemons</span>
              </div>
            </article>
          </li>
          <li>
            <article className="block border-b border-tertiary hover:bg-tertiary text-sm text-primary" to="/administrador">
              <div className="py-3 ml-12 flex items-center content-center">
                <img className="mr-3" alt="Icon" src={IconPokemon} />
                <span className="font-open font-normal text-sm">Pokemon</span>
              </div>
            </article>
          </li>
          <li>
            <button className="block bg-secondary text-sm text-primary w-full lg:hidden">
              <div className="py-3 flex items-center justify-center content-center text-center">
                <span className="font-open font-normal text-sm text-white">Cerrar</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className="main-sidebar__footer p-4">
        <div className="mb-4 bg-tertiary rounded p-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-primary font-open font-normal">Salir</p>
              <p className="underline text-xs text-primary font-open font-normal">Ir al inicio</p>
            </div>
            <div>
              <img alt="External" src={IconExternal} />
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-tertiary text-center">
          <a className="text-xs text-primary font-open font-normal" href="https://rubeenvz.com/">© Copyright <span className="underline">Rubeenvz</span> 2022</a>
        </div>
      </div>
    </div>
  )
}

export default Nav