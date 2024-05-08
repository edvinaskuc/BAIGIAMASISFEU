import HomePage from "./HomePage";
import { Route, Routes, Router } from "react-router-dom";
import NavBar from "./NavBar";
import Top3 from "./Top3";
import Developers from "./Developers";
import AllList from "./AllList";
import AddGame from "./AddGame";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Top3" element={<Top3 />} />
        <Route path="/AllList" element={<AllList />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/AddGame" element={<AddGame />} />
      </Routes>
    </>
  );
}

export default App;
