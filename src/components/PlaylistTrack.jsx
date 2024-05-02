import { useContext } from "react";
import { IoIosHeart } from "react-icons/io";
import { TrackContext } from "../contexts/TrackCTX";

export default function PlaylistTrack({
  id,
  img,
  name,
  artist,
  album,
  date,
  src
}) {
  const {track, setTrack} = useContext(TrackContext);

  return (
    <tr
      onClick={() => setTrack({ id, img, name, artist, album, date, src })}
      className="w-full flex justify-between items-center gap-5 text-[#fff] p-1 rounded hover:bg-[#919191]"
    >
      <div className="flex justify-start items-center gap-1 w-[20%]">
        <td className="text-[22px] font-medium ">{id + 1}</td>
        <td className="text-[18px] font-medium   flex justify-center items-center gap-2 pl-1">
          <img
            className="w-[52px] h-[52px] object-cover"
            src={img}
            alt="track_photo"
          />
          <div className="flex flex-col justify-center items-center gap-1">
            {name}
            {artist}
          </div>
        </td>
      </div>
      <td className="text-[18px] font-medium w-[20%]">{album}</td>
      <td className="text-[18px] font-medium w-[20%]">{date}</td>
      <td className="text-[18px] font-medium flex justify-end items-center gap-10 w-[20%]">
        <IoIosHeart color="white" size={28} />
        "0:29"
      </td>
    </tr>
  );
}
