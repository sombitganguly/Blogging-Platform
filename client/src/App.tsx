import { BrowserRouter, Route, Routes } from "react-router"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}
