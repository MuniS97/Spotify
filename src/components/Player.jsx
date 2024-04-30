import { IoPlay, IoPause } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

function Player() {
  return (
    <section className="fixed left-0 right-0 bottom-0 h-[116px] bg-[#181818] z-10 flex items-center justify-between p-5">
      <div className="flex items-center gap-4">
        <img
          className="w-[70px] h[70px] object-cover"
          src="https://unsplash.com/photos/a-bright-blue-object-in-the-middle-of-the-night-sky-Yh85OWKlS0w"
          alt=""
        />
        <div className="text-white flex flex-col items-start">
          <span>MonkeyBird</span>
          <span>Eminem</span>
        </div>
        <button className="text-white">
          <FaRegArrowAltCircleDown size={18} />
        </button>
      </div>
      <div className="flex items-center flex-col justify-center gap-2">
        <audio src="" hidden controls></audio>
        <div className="flex items-center gap-2">
          <button></button>
          <button className="text-[#c4c4c4]">
            <MdSkipPrevious size={24}/>
          </button>
          <button className="p-[8px] text-center bg-white rounded-full">
            {true ? <IoPlay size={24} /> : <IoPause size={24} />}
          </button>
          <button className="text-[#c4c4c4]">
            <MdSkipNext size={24}/>
          </button>
          <button></button>
        </div>
        <div className="w-full flex items-center gap-2 text-[#c4c4c4]">
          <span>0:12</span>
          <input type="range" className="w-[630px]"/>
          <span>0:29</span>
        </div>
      </div>
      <div>
        <div>
          <button></button>
          <input type="range" />
          <button></button>
        </div>
      </div>
    </section>
  );
}

export default Player;
