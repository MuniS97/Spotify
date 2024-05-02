import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Layout from "./layout/Layout";
import LikedTracks from "./pages/LikedTracks";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";
import { useState } from "react";
import { TrackContext } from "./contexts/TrackCTX";


function App() {
  const [track, setTrack] = useState(null)

  return (
    <TrackContext.Provider value={{track, setTrack}}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/likedtracks" element={<LikedTracks />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
    </TrackContext.Provider>
  );
}

export default App;
