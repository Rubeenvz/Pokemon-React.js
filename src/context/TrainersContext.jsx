import { createContext, useState, useEffect } from "react"

export const TrainersContext = createContext()

const TrainersProvider = (props) => {

  const [currentTrainer, setCurrentTrainer] = useState({})

  useEffect( async () => {
    const userResponse = await (await fetch('https://randomuser.me/api/?page=0&results=1')).json()
    let user = await userResponse.results[0]
    const pokemonResponse = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${user.dob.age}`)).json()
    user.pokemon = pokemonResponse
    setCurrentTrainer(user)
  },[])

  return (
    <TrainersContext.Provider value={{currentTrainer, setCurrentTrainer}}>
      { props.children }
    </TrainersContext.Provider>
  )
}

export default TrainersProvider