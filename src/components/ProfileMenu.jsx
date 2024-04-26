import { TiArrowSortedDown } from "react-icons/ti";
import { RxExternalLink } from "react-icons/rx";
import { useState } from "react";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="select-none cursor-pointer flex items-center gap-2 bg-[#0a0a0a] rounded-3xl p-0.5 text-white"
      >
        <img
          className="rounded-full object-cover"
          src="/images/user.png"
          alt="avatar"
        />
        <span>User</span>
        <button>
          <TiArrowSortedDown size={24} />
        </button>
      </div>

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
