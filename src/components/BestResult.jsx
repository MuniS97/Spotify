function BestResult({ img, title, artist }) {
  return (
    <div className="w-[40%] flex flex-col justify-center items-start gap-5">
      <h2 className="text-[32px] font-bold text-white">Best Result</h2>
      <div className="w-full h-[300px] bg-[#181818] rounded-lg flex flex-col items-start gap-[5px]  p-5">
        <img
          className="w-[150px] h-[150px] rounded-lg object-cover"
          src={img}
          alt="track's photo"
        />
        {title?.length < 20 ? (
          <h3 className="text-[50px] font-bold text-white">{title}</h3>
        ) : (
          <h3 className="text-[50px] font-bold text-white">
            {title?.slice(0, 20)}...
          </h3>
        )}

        <p className="text-[22px] text-white font-medium flex justify-start items-center gap-1">
          {/* <span className="text-[22px] text-[#b3b3b3] font-normal flex items-center gap-1">
            <div className="w-5 h-5 bg-[#b3b3b3] rounded flex justify-center items-center text-[20px] text-black">
              E
            </div>{" "}
            Track -{" "}
          </span>
          {artist} */}
          Artist
        </p>
      </div>
    </div>
  );
}

export default BestResult;
