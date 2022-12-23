import { BrowserRouter, Routes, Route } from "react-router-dom"
import MenuBar from "./components/MenuBar"
import Home from "./pages/Home"
import Team from "./pages/Team"

function App() {
  return (
    <div className="bg-[#f8f8f8] flex">
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
