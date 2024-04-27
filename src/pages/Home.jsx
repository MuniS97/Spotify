import { useEffect, useState } from "react";





export default function Home() {
  const base_url = import.meta.env.VITE_BASE_URL
  const token = localStorage.getItem('token')
  const [playlists, setPlaylists] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch(base_url + "/browse/featured-playlists", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json())
      .then(res => setPlaylists(res.playlists.items))

  }, [])

  return (
    <section className="bg-[#222222] w-full pl-[340px] pr-10 h-screen">
      <div className="w-full flex justify-start items-start flex-col gap-[18px]">
        <h2 className="text-[38px] font-bold text-white">Good morning</h2>
        <div className="grid grid-cols-4 justify-start items-start gap-x-[30px] gap-y-5">

          
        
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-7">
        <div className="w-full flex justify-between items-center text-white pt-10">
          <h2 className="font-bold text-3xl">Shows you might like</h2>
          <a href="#" className="font-normal text-[17px] no-underline">
            SEE ALL
          </a>
        </div>
        <div className="grid grid-cols-6 justify-start items-start gap-x-[30px] gap-y-5">

          

        </div>
      </div>
    </section>
  );
}
