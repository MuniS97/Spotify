import { TiArrowSortedDown } from "react-icons/ti";
import { RxExternalLink } from "react-icons/rx";
import { useEffect, useState } from "react";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + "/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      {data?.images ? (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="select-none cursor-pointer flex items-center gap-2 bg-[#0a0a0a] rounded-3xl p-0.5 text-white"
        >
          <img
            className="rounded-full w-[34px] h-[34px]"
            src={data.images[0].url}
            alt="avatar"
          />
          <span>{data.display_name}</span>
          <button>
            <TiArrowSortedDown size={24} />
          </button>
        </div>
      ) : (
        <div className="rounded-full w-[34px] h-[34px] bg-black border-white border flex justify-center items-center">
          {data?.display_name?.slice(0, 1).toUpperCase()}
        </div>
      )}

      {isOpen ? (
        <div className="w-60 bg-[#282828] p-4 absolute right-10 top-[70px] rounded">
          <ul className="text-white text-xl font-medium flex flex-col gap-5">
            <li className="flex items-center justify-between cursor-pointer">
              <span>Account</span>
              <RxExternalLink size={28} />
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              <span>Profile</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              <span>Log out</span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default ProfileMenu;
