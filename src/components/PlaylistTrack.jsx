import { useContext } from "react";
import { IoIosHeart } from "react-icons/io";
import { TrackContext } from "../contexts/TrackCTX";
import AudioSpinner from "./AudioSpinner";

export default function PlaylistTrack({
  id,
  img,
  name,
  artist,
  album,
  date,
  src,
}) {
  const { track, setTrack } = useContext(TrackContext);
  return (
    <tr
      onClick={() => setTrack({ id, img, name, artist, album, date, src })}
      className="w-full flex justify-between items-center text-[#fff] p-1 rounded hover:bg-[#919191]"
    >
      <div className="w-[5%] text-start pl-[10px]">
        {id === track?.id ? (
          <AudioSpinner />
        ) : (
          <td className="text-[22px] font-medium ">{id + 1}</td>
        )}
      </div>
      <td className=" text-start font-medium flex justify-start items-center gap-2 w-[30%]">
        <img
          className="w-[52px] h-[52px] object-cover"
          src={img}
          alt="track_photo"
        />
        <div className="flex flex-col justify-start items-start gap-1">
        {id === track?.id ? (
          <h2 className="text-green-700 text-[18px]">{name}</h2>
        ) : (
          <h2 className="text-[20px]">{name}</h2>
        )}
          <p className="text-[14px]">{artist}</p>
        </div>
      </td>
      <td className="text-[18px] font-medium text-start w-[30%]">{album}</td>
      <td className="text-[18px] font-medium text-start w-[20%]">{date}</td>
      <td className="text-[18px] font-medium flex justify-end items-center gap-10 w-[20%]">
        <IoIosHeart className="cursor-pointer" color="white" size={28} />
        "0:29"
      </td>
    </tr>
  );
}
