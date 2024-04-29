import { useEffect, useState } from "react";

function AboutPlaylist() {
  const base_url = import.meta.env.VITE_BASE_URL;
  const [chosedPlaylist, setChosedPlaylist] = useState([]);

  useEffect(() => {
    const id = location.pathname.split("/").at(-1);
    const token = localStorage.getItem("token");

    fetch(base_url + "/playlists/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setChosedPlaylist(res));
  }, []);

  return (
    <>
      <div className="py-[30px] px-[40px] flex justify-start items-end gap-8 py-[100px] pl-[340px] pr-10">
        {chosedPlaylist?.images ? (
          <img
            className="w-[297px] h-[297px]"
            src={chosedPlaylist?.images[0].url}
            alt="album_photo"
          />
        ) : "Loading..."}
        <div className="flex flex-col justify-start items-start gap-3 text-white">
          <p className="text-[16px] font-medium">ПУБЛИЧНЫЙ ПЛЕЙЛИСТ</p>
          {!chosedPlaylist?.name?.length > 10 ? (<h2 className="text-[122px] font-black">{chosedPlaylist.name}</h2>) : <h2 className="text-[80px] font-black">{chosedPlaylist.name}</h2>}
          <p className="text-xl font-normal">
            {
              chosedPlaylist?.tracks?.items ? (chosedPlaylist?.tracks?.items[0].track.artists[0].name,
              chosedPlaylist?.tracks?.items[1].track.artists[0].name,
              chosedPlaylist?.tracks?.items[2].track.artists[0].name + 'and more.') : "Loading..."
            }
          </p>
          <p className="text-xl font-normal">
            Эксклюзивно для {import.meta.env.VITE_CLIENT_ID} |{" "}
            {chosedPlaylist?.tracks?.items?.length} треков
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPlaylist;
