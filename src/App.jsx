import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Layout from "./layout/Layout";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
