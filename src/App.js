import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes, Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Top3 from "./Pages/Top3/Top3";
import Developers from "./Pages/Developers/Developers";
import AllList from "./Pages/AllList/AllList";
import AddGame from "./Pages/AddGame/AddGame";
import Top3Edit from "./Pages/Top3/Top3Edit";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Top3" element={<Top3 />} />
        <Route path="/AllList" element={<AllList />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/AddGame" element={<AddGame />} />
        <Route path="/Top3/:id" element={<Top3Edit />} />
      </Routes>
    </>
  );
}

export default App;
