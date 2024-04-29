import { useEffect } from "react";
import BrowseAll from "../components/BrowseAll";

export default function Search() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/categories?limit=10", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res.categories.items));
  });

  return (
    <div className="pl-[340px] pr-10  w-full bg-[#222222] h-full flex flex-col justify-start items-start">
      <div className="flex items-start flex-col justify-start py-20 gap-7">
        <h2 className="text-white text-3xl font-bold">Browse All</h2>
        <div className="grid grid-cols-5 justify-start items-start gap-x-[30px] gap-y-5">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map(() => (
            <BrowseAll />
          ))}
        </div>
      </div>
    </div>
  );
}
