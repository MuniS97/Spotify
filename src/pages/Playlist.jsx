import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


export default function Playlist() {
  const base_url = import.meta.env.VITE_BASE_URL;
  const [chosedPlaylist, setChosedPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const id = location.pathname.split("/").at(-1);
    const token = localStorage.getItem("token");

    fetch(base_url + "/playlists/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setChosedPlaylist(res));

    fetch(base_url + "/playlists/" + id + "/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setTracks(res.items));
  }, []);

  return (
    <div className="h-full bg-yellow-400 p-0">
      <div className="py-[30px] px-[40px] flex justify-start items-end gap-8">
        <img
          className="w-[297px] h-[297px]"
          src={chosedPlaylist.images[0].url}
          alt="album_photo"
        />
        <div className="flex flex-col justify-start items-start gap-3 text-white">
          <p className="text-[16px] font-medium">ПУБЛИЧНЫЙ ПЛЕЙЛИСТ</p>
          <h2 className="text-[122px] font-black">{chosedPlaylist.name}</h2>
          <p className="text-xl font-normal">
            {chosedPlaylist.tracks.items[0].track.artists[0].name},{" "}
            {chosedPlaylist.tracks.items[1].track.artists[0].name},{" "}
            {chosedPlaylist.tracks.items[2].track.artists[0].name} и более.
          </p>
          <p className="text-xl font-normal">
            Эксклюзивно для {import.meta.env.VITE_CLIENT_ID} |{" "}
            {chosedPlaylist.tracks.items.length} треков
          </p>
        </div>
      </div>

      <div className="w-full h-screen bg-slate-700">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-[35px]">
            <FaCirclePlay size={72} color="green"/>
            <FaRegHeart size={52} color="white"/>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
