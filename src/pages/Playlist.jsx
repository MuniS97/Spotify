import { useEffect, useState } from "react";



export default function Playlist() {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const id = location.pathname.split('/').at(-1)
    const token = localStorage.getItem('token')

    fetch(import.meta.env.VITE_BASE_URL + '/playlists/' + id + "/tracks", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json())
      .then(res => setTracks(res.items))
  }, [])
  

  return (
    <div className="h-screen">
      <h1>Playlist</h1> 
    </div>
  );
}
