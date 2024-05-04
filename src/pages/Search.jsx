import { useContext, useEffect, useState } from "react";
import { SearchValueContext } from "../contexts/SearchValueCTX";

export default function Search() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const { searchValueCTX } = useContext(SearchValueContext);

  useEffect(() => {
    searchValueCTX === ""
      ? null
      : fetch(
          `${baseUrl}/search?q=${searchValueCTX}&type=album%2Cplaylist%2Ctrack%2Cartist%2Cshow&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((res) => console.log(res));
  });

  return (
    <div className="pl-[340px] pr-10  w-full bg-[#222222] h-screen flex flex-col justify-start items-start"></div>
  );
}
