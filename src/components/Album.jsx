



export default function Album({img, title, author}) {
    return (
        <>
            <div className="cursor-pointer w-[230px] -h[300px] bg-[#181818] flex justify-start items-start gap-6 p-5 flex-col">
                <img className="w-[191px] h-[191px] rounded-[14px] object-cover" src={img} alt="artist" />
                <h4 className="text-white font-medium text-[21px]">{title}</h4>
                <p className="text-white font-medium text-[15px]">{author}</p>
            </div>
        </>
    )
}