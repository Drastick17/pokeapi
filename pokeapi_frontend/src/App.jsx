import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeCardsContainer from "./components/PokeCardsContainer";
import NavbarContainer from "./components/NavbarContainer";
import PokeDetails from "./components/PokeDetails";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<PokeCardsContainer />} />
          <Route path="/:pokemon" element={<PokeDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
