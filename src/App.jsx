import { Routes, Route, Outlet, redirect, Navigate } from "react-router";
import Signup from "./routes/signup/Signup";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to={"./signup"} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
