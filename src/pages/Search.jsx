import { useEffect, useState } from "react";
import BrowseAll from "../components/BrowseAll";

export default function Search() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const [browseAll, setBrowseAll] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/browse/categories?limit=10&offset=5", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setBrowseAll(res.categories.items));
  });

  return (
    <div className="pl-[340px] pr-10  w-full bg-[#222222] h-screen flex flex-col justify-start items-start">
      <div className="flex items-start flex-col justify-start py-20 gap-7">
        <h2 className="text-white text-3xl font-bold">Browse All</h2>
        <div className="grid grid-cols-5 justify-start items-start gap-x-[30px] gap-y-5">
          {!browseAll ? (
            <span>Loading....</span>
          ) : (
            
            browseAll.map((item) => {
              <BrowseAll img={item?.icons[0].url} title={item?.name} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
