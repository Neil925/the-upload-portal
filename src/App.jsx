import { Routes, Route, Outlet } from "react-router";
import Signup from "./routes/signup/Signup";

function App() {
  return (
    <Routes>
      <Route index element={<h1>WIP</h1>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
