import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Home/Home";
import Science from "./Components/Science/Science";
import Autonomous from "./Components/Autonomous/Autonomous";
import Electrical from "./Components/Electrical/Electrical";
import Mechanical from "./Components/Mechanical/Mechanical";
import Communication from "./Components/Communication/Communication";
import Soil from "./Components/Science/Soil";
import Rock from "./Components/Science/Rock";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Science />}>
          <Route index element={<Soil />}></Route>
          <Route path="rock" element={<Rock />}></Route>
        </Route>
        <Route path="/autonomous" element={<Autonomous />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/electrical" element={<Electrical />} />
      </Routes>
    </>
  );
}

export default App;
