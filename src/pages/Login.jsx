import { ImSpotify } from "react-icons/im";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { BsMusicPlayerFill } from "react-icons/bs";

export default function Login() {
  const VITE_AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
  const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const VITE_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const VITE_RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE;

  let url = `${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TYPE}&scope=playlist-modify-public`;

  return (
    <>
      <section className="bg-[#222222] flex items-center justify-center w-full h-screen relative">
        <a href={url} className="text-white z-10 text-4xl cursor-pointer relative">
          <button>Login with spotify</button>
          <span className="select-none absolute left-[-100%]  w-[800px] h-[2px] bg-[#40cc47] rotate-[75deg]"></span>
          <span className="select-none absolute left-[-90%]  w-[800px] h-[2px] bg-[#40cc47] rotate-[75deg]"></span>
        </a>
        <div className="absolute w-full max-w-[1920px] h-screen">
          <div className="relative w-full max-w-[1920px] h-screen">
            <ImSpotify
              className="select-none absolute top-[5%] left-[5%] rotate-[-25deg]"
              size={400}
              color="#40cc47"
            />
            <FaHeadphonesAlt
              className="select-none absolute bottom-[20%] right-[17%]"
              size={200}
              color="#40cc47"
            />
            <GiMusicalNotes
              className="select-none absolute bottom-[12%] left-[30%] rotate-[-10deg]"
              size={150}
              color="#40cc47"
            />
            <BsMusicPlayerFill
              className="select-none absolute top-[10%] right-[20%] rotate-[10deg]"
              size={150}
              color="#40cc47"
            />
          </div>
        </div>
      </section>
    </>
  );
}
