import { ImSpotify } from "react-icons/im";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { BsMusicPlayerFill } from "react-icons/bs";

export default function Login() {
  const VITE_AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
  const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const VITE_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const VITE_RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE;

  let url = `${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TYPE}&scope=user-top-read`;
//playlist-modify-public
  return (
    <>
      <section className="bg-[#222222] flex items-center flex-col gap-[10px] justify-center w-full h-screen text-white">
        <img className="w-[200px] object-cover" src="/icons/big-logo.svg" alt="logo" />
        <h1 className="text-[35px] font-normal">Войти с помощью Spotify</h1>
        <a href={url} className=" z-10 text-2xl cursor-pointer">
          <button className="bg-green-500 p-[12px] rounded-[10px]">Login with spotify</button>
        </a>
      </section>
    </>
  );
}
