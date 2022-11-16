import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Place from "../pages/Place";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Place />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
