import { IoPlay, IoPause, IoShuffle, IoRepeat } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext, MdOutlineCloseFullscreen } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { TrackContext } from "../App";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbDevices2 } from "react-icons/tb";
import { IoMdVolumeHigh } from "react-icons/io";

function Player() {
  const [play, setPlay] = useState(false);
  const { track } = useContext(TrackContext);
  useEffect(()=> {
    const audio = document.querySelector('audio')
    console.log(track);
    audio.play()
  }, [track]) 
  return (
    <section className="fixed left-0 right-0 bottom-0 h-[116px] bg-[#181818] z-10 flex items-center justify-between p-5">
      <div className="flex items-center gap-4">
        <img
          className="w-[70px] h-[70px] object-cover"
          src={!track ? "https://images.unsplash.com/photo-1711994872181-1e112e5e18e0?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : track?.img} 
          alt=""
        />
        <div className=" flex flex-col items-start">
          <span className="text-[18px] font-medium text-white">{!track ? "MonkeyBird" : track?.name}</span> 
          <span className="text-[16px] font-medium text-[#b3b3b3]">{!track ? "Eminem" : track?.artist}</span>
        </div>
        <button className="text-white ml-2">
          <FaRegArrowAltCircleDown size={28} />
        </button>
      </div>
      <div className="flex items-center flex-col justify-center gap-2">
        <audio src={track?.src} hidden controls></audio>
        <div className="flex items-center gap-[22px]">
          <button className="text-[#c4c4c4]">
            <IoShuffle size={32}/>
          </button>
          <button className="text-[#c4c4c4]">
            <MdSkipPrevious size={32} />
          </button>
          <button className="w-[48px] h-[48px] flex items-center justify-center text-center bg-white rounded-full">
            {true ? <IoPlay size={25} /> : <IoPause size={25} />}
          </button>
          <button className="text-[#c4c4c4]">
            <MdSkipNext size={32} />
          </button>
          <button className="text-[#c4c4c4]">
            <IoRepeat  size={32}/>
          </button>
        </div>
        <div className="w-full flex items-center gap-2 text-[#c4c4c4]">
          <span>0:12</span>
          <input type="range" className="w-[630px]" />
          <span>0:29</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <button className="text-[#c4c4c4]">
            <HiOutlineQueueList size={32}/>
          </button>
          <button className="text-[#c4c4c4]">
            <TbDevices2 size={32}/>
          </button>
          <button className="text-[#c4c4c4]">
            <IoMdVolumeHigh size={32}/>
          </button>
          <input type="range" />
          <button className="text-[#c4c4c4]">
            <MdOutlineCloseFullscreen size={32}/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Player;
