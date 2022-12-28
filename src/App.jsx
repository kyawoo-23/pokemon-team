import { BrowserRouter, Routes, Route } from "react-router-dom"
import MenuBar from "./components/MenuBar"
import AddPokemonFromTeam from "./pages/AddPokemonFromTeam"
import Home from "./pages/Home"
import PokeDetails from "./pages/PokeDetails"
import ReplacePokemonFromTeam from "./pages/ReplacePokemonFromTeam"
import Team from "./pages/Team"

function App() {
  return (
    <div className='bg-[#f8f8f8] flex'>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teams' element={<Team />} />
          <Route path='/teams/add/:teamId' element={<AddPokemonFromTeam />} />
          <Route
            path='/teams/replace/:teamId/:oldMem'
            element={<ReplacePokemonFromTeam />}
          />
          <Route path='/pokemon/:name' element={<PokeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
