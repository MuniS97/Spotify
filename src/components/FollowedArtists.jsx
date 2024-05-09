import { BsPeopleFill } from "react-icons/bs";

function FollowedArtists({ name }) {
  return (
    <li className="hover:text-white hover:bg-[#222222] rounded-lg transition-all cursor-pointer text-gray-300 flex items-center justify-start gap-5 py-3 px-6">
      <BsPeopleFill size={26} />
      <div className="flex flex-col justify-start items-start gap-1">
        <span className="text-base font-bold">{name}</span>
        <p className="font-medium text-sm">Исполнитель</p>
      </div>
    </li>
  );
}

export default FollowedArtists;
