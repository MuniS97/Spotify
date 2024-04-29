import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import Track_reload from "./TrackTable";

function PlaylistTracks() {
  const token = localStorage.getItem("token");
  const id = useLocation().pathname.split("/").at(-1);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + "/playlists/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setTracks(res.tracks.items));
  }, []);

  return (
    <>
      <div className="flex justify-start items-start flex-col gap-0 w-full h-screen backdrop-blur-md bg-white/30 pl-[340px] pr-10">
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
              <tr className="w-full text-[#fff] flex justify-between items-center gap-5 border-b-[1px] border-[#fff] mb-5">
                <th className="text-[22px] font-medium"># TITLE</th>
                <th className="text-[16px] font-medium pl-[75px]">ALBUM</th>
                <th className="text-[16px] font-medium">DATA ADDED</th>
                <th>
                  <MdOutlineWatchLater
                    className="mr-10"
                    color="#fff"
                    size={28}
                  />
                </th>
              </tr>
            </thead>
            <tbody className="w-full flex justify-between flex-col items-center gap-5">
              {tracks.map((item) => {
                <Track_reload
                  img={item?.track?.album?.images[0].url}
                  title={item?.track?.name}
                  singer={item?.track?.artists[0].name}
                  album={item?.track?.album?.name}
                  date={item?.track?.album?.release_date}
                  duration={"0:29"}
                />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PlaylistTracks;