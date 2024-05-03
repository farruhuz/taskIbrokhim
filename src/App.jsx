import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </>
  )
}

export default App
