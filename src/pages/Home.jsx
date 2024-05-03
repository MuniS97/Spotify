import { useEffect, useState } from "react";
import SmallPlaylist from "../components/SmallPlaylist";
import Album from "../components/Album";

export default function Home() {
  const base_url = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const [playlists, setPlaylists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [aboutMe, setAboutMe] = useState([]);
  const [tracksForMe, setTracksForMe] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetch(base_url + "/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setAboutMe(res));

    fetch(base_url + "/me/playlists?limit=12&offset=0", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setPlaylists(res.items));

    fetch(
      base_url + "/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setAlbums(res.shows));

    fetch(base_url + "/browse/featured-playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setTracksForMe(res.playlists.items));

    fetch(base_url + "/recommendations?seed_genres=j-rock%2Ccountry", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setRecommended(res.tracks));
  }, []);

  return (
    <div className="h-full pl-[340px] pr-10  w-full bg-[#222222] pb-[150px]">
      <div className="w-full flex justify-start items-start flex-col gap-[18px]">
        <h2 className="text-[38px] font-bold text-white">Good morning</h2>
        <div className="grid grid-cols-4 justify-start items-start gap-x-[30px] gap-y-5">
          {playlists.slice(0, 4).map((item) => (
            <SmallPlaylist
              key={item?.id}
              title={item?.name}
              img={item?.images[0].url}
              id={item?.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-7">
        <div className="w-full flex justify-between items-center text-white pt-10">
          <h2 className="font-bold text-3xl">
            Made for you, {aboutMe.display_name}
          </h2>
          <a href="#" className="font-normal text-[17px] no-underline">
            SEE ALL
          </a>
        </div>
        <div className="grid grid-cols-4 justify-start items-start gap-x-[30px] gap-y-5">
          {tracksForMe.slice(0, 6).map((item) => (
            <SmallPlaylist
              key={item?.id}
              img={item?.images[0].url}
              title={item?.name}
              id={item?.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-7">
        <div className="w-full flex justify-between items-center text-white pt-10">
          <h2 className="font-bold text-3xl">Shows you might like</h2>
        </div>
        <div className="grid grid-cols-6 justify-start items-start gap-x-[30px] gap-y-5">
          {albums.slice(0, 6).map((item) => (
            <Album
              key={item.id}
              img={item.images[0].url}
              title={item.name}
              author={item.publisher}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-7">
        <div className="w-full flex justify-between items-center text-white pt-10">
          <h2 className="font-bold text-3xl">J-Rock recommendations</h2>
          <a href="#" className="font-normal text-[17px] no-underline">
            SEE ALL
          </a>
        </div>
        <div className="grid grid-cols-6 justify-start items-start gap-x-[30px] gap-y-5">
          {recommended.slice(0, 12).map((item) => (
            <Album
              key={item?.id}
              img={item?.album?.images[0]?.url}
              title={item?.album?.name}
              author={item?.album?.artists[0]?.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
