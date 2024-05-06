import { useEffect, useState } from "react";
import PlaylistTrack from "../components/PlaylistTrack";
import { MdOutlineDownloading, MdOutlineWatchLater } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaCirclePlay, FaRegHeart } from "react-icons/fa6";

export default function LikedTracks() {
  const base_url = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const [aboutMe, setAboutMe] = useState({});
  const [likedTrack, setLikedTrack] = useState([]);

  useEffect(() => {
    fetch(base_url + "/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setAboutMe(res));

    fetch(base_url + "/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setLikedTrack(res.items));
  }, []);

  return (
    <div className="h-full bg-gradient-to-b from-blue-700 to-[#121212] w-full flex flex-col items-start justify-start gap-5">
      <div className="pl-[340px] pr-10 flex justify-start items-end gap-5 p-[50px]">
        <img
          className="w[297px] h-[297px] rounded"
          src="/images/likedTracks.jpg"
          alt="likedTracks"
        />
        <div className="flex items-start justify-start flex-col gap-2 text-white pb-[10px]">
          <p className="text-[16px] font-medium">Playlist</p>
          <h1 className="text-[100px] font-extrabold">Favourite songs</h1>
          <div className="flex justify-start items-center gap-1">
            {aboutMe?.images ? (
              <img
                className="rounded-full w-[34px] h-[34px]"
                src={aboutMe.images[0].url}
                alt="avatar"
              />
            ) : (
              <div className="rounded-full w-[34px] h-[34px] bg-black border-white border flex justify-center items-center">
                {aboutMe?.display_name?.slice(0, 1).toUpperCase()}
              </div>
            )}
            <h5 className="text-[18px] font-medium">{aboutMe?.display_name}</h5>
          </div>
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
                <th className="text-[20px] font-medium w-[5%] pl-[10px] text-start">
                  #
                </th>
                <th className="text-[20px] font-medium w-[30%] text-start">
                  TITLE
                </th>
                <th className="text-[20px] font-medium w-[30%] text-start">
                  ALBUM
                </th>
                <th className="text-[20px] font-medium w-[20%] text-start">
                  DATA ADDED
                </th>
                <th className="w-[20%] flex justify-end pr-5">
                  <MdOutlineWatchLater color="#fff" size={28} />
                </th>
              </tr>
            </thead>
            <tbody className="w-full flex justify-between flex-col items-center gap-5 mb-[150px]">
              {!likedTrack ? (
                <span>Loading...</span>
              ) : (
                likedTrack.map((item, idx) => (
                  <PlaylistTrack
                    key={idx}
                    id={idx}
                    img={item?.album?.images[0].url}
                    name={item?.name}
                    artist={item?.artists[0].name}
                    src={item?.preview_url}
                    album={item?.album?.name}
                    date={item?.album?.release_date}
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
