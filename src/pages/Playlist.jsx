import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import PlaylistTrack from "../components/PlaylistTrack"

export default function Playlist() {
  const base_url = import.meta.env.VITE_BASE_URL;
  const [chosedPlaylist, setChosedPlaylist] = useState([]);
  const id = location.pathname.split("/").at(-1);
  const token = localStorage.getItem("token");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(base_url + "/playlists/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setChosedPlaylist(res));


    fetch(import.meta.env.VITE_BASE_URL + "/playlists/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setTracks(res.tracks.items));
  }, []);

  
  return (
    <div className="h-full bg-gradient-to-b from-[#DEF628] to-[#121212] w-full">
      <div className="px-[40px] flex justify-start items-end gap-8 py-[100px] pl-[340px] pr-10">
        {chosedPlaylist?.images ? (
          <img
            className="w-[297px] h-[297px]"
            src={chosedPlaylist?.images[0].url}
            alt="album_photo"
          />
        ) : (
          "Loading..."
        )}
        <div className="flex flex-col justify-start items-start gap-3 text-white">
          <p className="text-[16px] font-medium">ПУБЛИЧНЫЙ ПЛЕЙЛИСТ</p>
          {!chosedPlaylist?.name?.length > 10 ? (
            <h2 className="text-[122px] font-black">{chosedPlaylist.name}</h2>
          ) : (
            <h2 className="text-[80px] font-black">{chosedPlaylist.name}</h2>
          )}
          <p className="text-xl font-normal">
            {chosedPlaylist?.tracks?.items
              ? (chosedPlaylist?.tracks?.items[0].track.artists[0].name,
                chosedPlaylist?.tracks?.items[1].track.artists[0].name,
                chosedPlaylist?.tracks?.items[2].track.artists[0].name +
                  "and more.")
              : "Loading..."}
          </p>
          <p className="text-xl font-normal">
            Эксклюзивно для {import.meta.env.VITE_CLIENT_ID} |{" "}
            {chosedPlaylist?.tracks?.items?.length} треков
          </p>
        </div>
      </div>

      <div className="flex justify-start items-start flex-col gap-0 w-full h-full backdrop-blur-md bg-white/30 pl-[340px] pr-10">
        <div className="w-full flex justify-between items-center py-[30px] px-[40px]">
          <div className="flex justify-center items-center gap-[35px]">
            <FaCirclePlay className="cursor-pointer" size={72} color="green" />
            <FaRegHeart className="cursor-pointer" size={45} color="white" />
            <MdOutlineDownloading
              className="cursor-pointer"
              size={45}
              color="white"
            />
            <SlOptions className="cursor-pointer" size={45} color="white" />
          </div>
          <div className="flex justify-center items-center gap-5 cursor-pointer">
            <IoSearch size={25} color="white" />
            <span className="text-white text-[18px] font-normal">
              Custom order
            </span>
            <IoMdArrowDropdown size={25} color="white" />
          </div>
        </div>
        <div className="w-full -h-full pt-5">
          <table className="w-full h-full">
            <thead className="w-full flex justify-between flex-col items-center gap-5">
              <tr className="w-full text-[#fff] flex justify-between items-center border-b-[1px] border-[#fff] mb-5">
                <th className="text-[20px] font-medium w-[20%] text-start"># TITLE</th>
                <th className="text-[20px] font-medium w-[20%] text-start">ALBUM</th>
                <th className="text-[20px] font-medium w-[20%] text-start">DATA ADDED</th>
                <th className="w-[20%] flex justify-end pr-5">
                  <MdOutlineWatchLater
                    color="#fff"
                    size={28}
                  />
                </th>
              </tr>
            </thead>
            <tbody className="w-full flex justify-between flex-col items-center gap-5 mb-[150px]">
              {!tracks ? (
                <span>Loading...</span>
              ) : (
                tracks.map((item, idx) => (
                  <PlaylistTrack
                    key={idx}
                    id={idx}
                    img={item?.track?.album?.images[0].url}
                    name={item?.track?.name}
                    artist={item?.track?.artists[0].name}
                    scr={item?.track?.preview_url}
                    album={item?.track?.album?.name}
                    date={item?.track?.album?.release_date}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
