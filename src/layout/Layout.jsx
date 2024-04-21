import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProfileMenu from "../components/ProfileMenu";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-[#222222] w-full flex justify-between items-center pl-[340px] pr-10 py-5">
        <div className="flex items-center gap-1">
          <button className="bg-[#131313] rounded-full p-2">
            <MdKeyboardArrowLeft size={24} color="white" />
          </button>
          <button className="bg-[#131313] rounded-full p-2">
            <MdKeyboardArrowRight size={24} color="white" />
          </button>
        </div>
        <ProfileMenu />
      </header>
      <aside className="w-[300px] bg-black px-2.5 py-8 fixed top-0 left-0 bottom-0 flex flex-col items-start gap-[30px]">
        <img className="pl-6" src="/icons/big-logo.svg" alt="logo" />
        <nav>
          <ul>
            <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6">
              <AiFillHome size={26} />
              <span className="text-lg font-bold">Home</span>
            </li>
            <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6">
            <FiSearch size={26}/>
                <span className="text-lg font-bold">Search</span>
            </li>
            <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6">
            <LuLibrary  size={26}/>
                <span className="text-lg font-bold">Your library</span>
            </li>
          </ul>
        </nav>
      </aside>
      {children}
      <div></div>
    </>
  );
}
