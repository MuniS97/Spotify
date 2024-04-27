import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProfileMenu from "../components/ProfileMenu";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const router = useLocation();

  useEffect(() => {
    let token = localStorage.getItem("token");
    let hash = location.hash;

    if (!token && hash) {
      token = hash.split("=")[1].split("&")[0];

      location.href = "";
      localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  if (!token) {
    navigate("/login");
  }

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
          {router.pathname.includes("search") ? (
            <div className="relative mx-5">
              <FiSearch size={32} className="absolute left-4 top-[10px]" />
              <input
                className="w-[468px] h-[52px] rounded-3xl border-none outline-gray-300 px-[60px] text-slate-500 text-[18px] font-normal"
                type="text"
                placeholder="Что хочешь включить?"
              />
            </div>
          ) : null}
        </div>
        <ProfileMenu />
      </header>
      <aside className="w-[300px] bg-black px-2.5 py-8 fixed top-0 left-0 bottom-0 flex flex-col items-start gap-[30px]">
        <img className="pl-6" src="/icons/big-logo.svg" alt="logo" />
        <nav>
          <ul>
            <Link to={"/"}>
              <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6">
                <AiFillHome size={26} />
                <span className="text-lg font-bold">Home</span>
              </li>
            </Link>
            <Link to={"/search"}>
              <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6">
                <FiSearch size={26} />
                <span className="text-lg font-bold">Search</span>
              </li>
            </Link>
            <Link to={"/library"}>
              <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6">
                <LuLibrary size={26} />
                <span className="text-lg font-bold">Your library</span>
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
      <Outlet />
      <div></div>
    </>
  );
}
