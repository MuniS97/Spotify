function SearchArtists({ img, name }) {
  return (
    <div className="w-[220px] h-[320px] flex flex-col items-start gap-3 hover:blur-[2px] cursor-pointer">
      <img
        src={img}
        className="w-full h-[220px] rounded-full"
        alt="playlist's photo"
      />
      <h5 className="text-[20px] font-medium text-white">{name}</h5>
      <p className="text-[18px] font-medium text-[#b3b3b3]">Исполнитель</p>
    </div>
  );
}

export default SearchArtists;
