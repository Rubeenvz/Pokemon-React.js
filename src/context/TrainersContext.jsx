import { createContext, useState, useEffect } from "react"

export const TrainersContext = createContext()

const TrainersProvider = (props) => {

  const [currentTrainer, setCurrentTrainer] = useState([])

  useEffect( async () => {
    const response = await (await fetch('https://randomuser.me/api/?page=0&results=9&seed=rubeenvz')).json()
    setCurrentTrainer(response.results)
  },[])

  return (
    <TrainersContext.Provider value={{currentTrainer}}>
      { props.children }
    </TrainersContext.Provider>
  )
}

export default TrainersProvider