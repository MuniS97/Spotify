import AboutPlaylist from "../components/AboutPlaylist";
import PlaylistTracks from "../components/PlaylistTracks";

export default function Playlist() {
  return (
    <div className="h-full bg-gradient-to-b from-[#DEF628] to-[#121212] w-full">
      <AboutPlaylist />

        <PlaylistTracks />
    </div>
  );
}
