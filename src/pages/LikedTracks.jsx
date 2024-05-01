import { useEffect, useState } from "react";

export default function LikedTracks() {
  const base_url = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const [aboutMe, setAboutMe] = useState({});
  const [likedTrack, setLikedTrack] = useState([]);

  useEffect(() => {
    fetch(base_url + "/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setAboutMe(res));

    // fetch(base_url + "/me/top/tracks", {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // }).then(res => res.json())
    //   .then(res => console.log(res))
  }, []);

  return (
    <div className="pl-[340px] pr-10 h-screen bg-gradient-to-b from-blue-700 to-[#121212] w-full flex flex-col items-start justify-start gap-5">
      <div className="flex justify-start items-end gap-5 p-[50px]">
        <img
          className="w[297px] h-[297px] rounded"
          src="/images/likedTracks.jpg"
          alt="likedTracks"
        />
        <div className="flex items-start justify-start flex-col gap-2 text-white pb-[10px]">
          <p className="text-[16px] font-medium">Playlist</p>
          <h1 className="text-[100px] font-extrabold">Favourite songs</h1>
          <div className="flex justify-start items-center gap-1">
            {aboutMe?.images ? (
              <img
                className="rounded-full w-[34px] h-[34px]"
                src={aboutMe.images[0].url}
                alt="avatar"
              />
            ) : (
              <div className="rounded-full w-[34px] h-[34px] bg-black border-white border flex justify-center items-center">
                {aboutMe?.display_name?.slice(0, 1).toUpperCase()}
              </div>
            )}
            <h5 className="text-[18px] font-medium">{aboutMe?.display_name}</h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
