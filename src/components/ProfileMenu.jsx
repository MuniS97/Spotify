import { TiArrowSortedDown } from "react-icons/ti";

function ProfileMenu() {
  return (
    <div className="select-none cursor-pointer flex items-center gap-2 bg-[#0a0a0a] rounded-3xl p-0.5 text-white">
      <img className="rounded-full object-cover" src="/images/user.png" alt="avatar" />
      <span>User</span>
      <button>
        <TiArrowSortedDown size={24}/>
      </button>
    </div>
  );
}

export default ProfileMenu