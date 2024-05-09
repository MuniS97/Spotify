import { useContext, useEffect, useState } from "react";
import { SearchValueContext } from "../contexts/SearchValueCTX";
import BestResult from "../components/BestResult";
import SearchTracks from "../components/SearchTracks";
import SearchPlaylist from "../components/SearchPlaylist";
import SearchArtists from "../components/SearchArtists";
import { HttpRequest } from "../hooks/http.request";

export default function Search() {
  const { searchResult } = useContext(SearchValueContext);

  const { loading, error, request } = HttpRequest();

  return (
    <div className="pl-[340px] pr-10  w-full bg-[#222222] h-full min-h-[1000px] pb-[150px]">
      {searchResult === "" ? (
        <h2 className="text-center font-extrabold text-[40px] text-white pt-[50px]">
          Ввидите запрос!
        </h2>
      ) : (
        <>
          <div className="flex justify-start items-start gap-[30px]">
            <BestResult
              img={searchResult?.artists?.items[0]?.images[0]?.url}
              title={searchResult?.artists?.items[0]?.name}
            />
            <div className="w-[60%] flex flex-col justify-start items-start gap-1">
              <h2 className="text-[32px] font-bold text-white pb-5">Tracks</h2>
              <div className="w-full flex flex-col justify-start items-start gap-3">
                {searchResult
                  ? searchResult.tracks.items
                      .slice(1, searchResult.tracks.items.length + 1)
                      .map((item, idx) => (
                        <SearchTracks
                          img={item.album.images[0]?.url}
                          name={item.album.name}
                          artist={item.album.artists[0]?.name}
                          key={idx}
                          id={idx}
                          src={item.preview_url}
                          date={item.album.release_date}
                          album={item.album.name}
                        />
                      ))
                  : null}
              </div>
            </div>
          </div>
          <section className="w-full flex flex-col items-start gap-[30px]">
            <h2 className="text-[32px] font-bold text-white  pt-[30px]">
              {searchResult?.artists?.items[0]?.name} и не только
            </h2>
            <div className="w-full grid grid-cols-6 gap-[30px]">
              {searchResult
                ? searchResult.playlists.items
                    .slice(0, searchResult.playlists.items.length + 1)
                    .map((item) => (
                      <SearchPlaylist
                        key={item.id}
                        img={item.images[0]?.url}
                        title={item.name}
                      />
                    ))
                : null}
            </div>
          </section>
          <section className="w-full flex flex-col items-start gap-[30px]">
            <h2 className="text-[32px] font-bold text-white  pt-[30px]">
              Исполнители
            </h2>
            <div className="w-full grid grid-cols-6 gap-[20px]">
              {searchResult
                ? searchResult.artists.items
                    .slice(0, searchResult.artists.items.length + 1)
                    .map((item) => (
                      <SearchArtists
                        img={item.images[0]?.url}
                        name={item.name}
                        key={item.id}
                      />
                    ))
                : null}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
