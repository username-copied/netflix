import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviePage/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
