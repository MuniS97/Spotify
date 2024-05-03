import { IoPlay, IoPause, IoShuffle, IoRepeat } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdOutlineCloseFullscreen,
} from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbDevices2 } from "react-icons/tb";
import { IoMdVolumeHigh } from "react-icons/io";
import { TrackContext } from "../contexts/TrackCTX";
import { PlaylistContext } from "../contexts/PlaylistCTX";

function Player() {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const [currentTime, setCurrentTime] = useState(0);

  const [play, setPlay] = useState(true);
  const { track, setTrack } = useContext(TrackContext);
  const { playlistCTX } = useContext(PlaylistContext);

  useEffect(() => {
    const audio = document.querySelector("audio");

    audio.play();

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });

    return () => {
      audio.removeEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
      });
    };
  }, [track]);

  function PlayerCondition() {
    const audio = document.querySelector("audio");

    play ? audio.pause() : audio.play();

    setPlay(!play);
  }

  function nextTrack() {
    const currTrack = playlistCTX[track.id + 1];
    const traack = {
      id: track.id + 1,
      img: currTrack.track.album.images[0].url,
      name: currTrack.track.name,
      artist: currTrack.track.artists[0].name,
      src: currTrack.track.preview_url,
      album: currTrack.track.album.name,
      date: currTrack.track.album.release_date,
    };
    setTrack(traack);
  }
  function prevTrack() {
    const currTrack = playlistCTX[track.id - 1];
    const traack = {
      id: track.id - 1,
      img: currTrack.track.album.images[0].url,
      name: currTrack.track.name,
      artist: currTrack.track.artists[0].name,
      src: currTrack.track.preview_url,
      album: currTrack.track.album.name,
      date: currTrack.track.album.release_date,
    };
    setTrack(traack);
  }

  return (
    <div className="w-full fixed left-0 right-0 bottom-0 h-[116px] bg-[#181818] z-10 flex items-center justify-between p-5">
      <div className="w-[30%] flex items-center gap-4">
        <img
          className="w-[70px] h-[70px] object-cover"
          src={
            !track
              ? "https://img.freepik.com/free-photo/abstract-watercolor-guitar-exploding-with-colorful-motion-generated-by-ai_188544-19725.jpg?w=900&t=st=1714673149~exp=1714673749~hmac=7000538d0ef4185a666afb2b3d9a79138b53caa524ac91c8caa353498cd67fa3"
              : track?.img
          }
          alt=""
        />
        <div className="flex flex-col items-start">
          <span className="text-[18px] font-medium text-white">
            {!track ? "Track's name" : track?.name}
          </span>
          <span className="text-[16px] font-medium text-[#b3b3b3]">
            {!track ? "Track's artists" : track?.artist}
          </span>
        </div>
        <button className="text-white ml-2">
          <FaRegArrowAltCircleDown size={28} />
        </button>
      </div>
      <div className="w-[30%] flex items-center flex-col justify-center gap-2">
        <audio src={track?.src} hidden controls></audio>
        <div className="flex items-center gap-[22px]">
          <button className="text-[#c4c4c4]">
            <IoShuffle size={32} />
          </button>
          <button className="text-[#c4c4c4]">
            <MdSkipPrevious onClick={prevTrack} size={32} />
          </button>
          <button
            className="w-[48px] h-[48px] flex items-center justify-center text-center bg-white rounded-full"
            onClick={PlayerCondition}
          >
            {play ? <IoPlay size={25} /> : <IoPause size={25} />}
          </button>
          <button onClick={nextTrack} className="text-[#c4c4c4]">
            <MdSkipNext size={32} />
          </button>
          <button className="text-[#c4c4c4]">
            <IoRepeat size={32} />
          </button>
        </div>
        <div className="w-full flex items-center gap-2 text-[#c4c4c4]">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            className="w-[630px]"
            min="0"
            max={track?.duration}
            value={currentTime}
            onChange={(e) => setCurrentTime(e.target.value)}
          />
          <span>0:29</span>
        </div>
      </div>
      <div className="w-[30%] flex justify-end">
        <div className=" flex items-center gap-2">
          <button className="text-[#c4c4c4]">
            <HiOutlineQueueList size={32} />
          </button>
          <button className="text-[#c4c4c4]">
            <TbDevices2 size={32} />
          </button>
          <button className="text-[#c4c4c4]">
            <IoMdVolumeHigh size={32} />
          </button>
          <input type="range" className="w-[120px]" />
          <button className="text-[#c4c4c4]">
            <MdOutlineCloseFullscreen size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
