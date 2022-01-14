import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from "./layout/Index";
import Dashboard from "./layout/Dashboard";

import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/pokemon" element={<Dashboard />}>
          <Route index element={<Pokemons />}></Route>
          <Route path=":id" element={<Pokemon />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
