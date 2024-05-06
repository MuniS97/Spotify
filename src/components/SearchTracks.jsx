import { useContext } from "react";
import { SlOptions } from "react-icons/sl";
import { TrackContext } from "../contexts/TrackCTX";

function SearchTracks({ img, name, artist, id, src, date, album }) {
  const { track, setTrack } = useContext(TrackContext);

  return (
    <div
      onClick={() => setTrack({ id, img, name, artist, album, date, src })}
      className="w-full flex justify-between items-center cursor-pointer"
    >
      <div className="flex justify-center items-center gap-5">
        <img
          className="w-[55px] h-[55px] rounded-xl object-cover"
          src={img}
          alt="track's photo"
        />
        <div className="flex flex-col items-start text-white gap=[2px]">
          <h4 className="text-[20px] font-medium">{name}</h4>
          <p className="text-[18px] font-medium">{artist}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 text-white">
        <span className="text-[20x] font-medium">0:30</span>
        <SlOptions className="cursor-pointer" size={20} />
      </div>
    </div>
  );
}

export default SearchTracks;
