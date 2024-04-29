import { IoIosHeart } from "react-icons/io";

export default function Track_reload(props) {
  return (
    <tr className="w-full flex justify-between items-center gap-5 text-[#fff]">
      <div className="flex justify-center items-center gap-1">
        <td className="text-[22px] font-medium ">1</td>
        <td className="text-[18px] font-medium   flex justify-center items-center gap-2 pl-1">
          <img
            className="w-[52px] h-[52px] object-cover"
            src={props.img}
            alt="track_photo"
          />
          <div className="flex flex-col justify-center items-center gap-1">
            {props.title}
            {props.singer}
          </div>
        </td>
      </div>
      <td className="text-[18px] font-medium  ">{props.album}</td>
      <td className="text-[18px] font-medium  ">{props.date}</td>
      <td className="text-[18px] font-medium flex justify-center items-center gap-10">
        <IoIosHeart color="white" size={28} /> {props.duration}
      </td>
    </tr>
  );
}
