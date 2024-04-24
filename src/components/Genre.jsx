

export default function Genre(props) {
    return (
        <>
            <div className="cursor-pointer select-none w-[360px] h-[100px] bg-[#303030] text-white flex justify-start items-center gap-5">
                <img className="w-[100px] h-[100px] object-cover" src="/images/genre.png" alt="picture" />
                <span>{props.title}</span>
            </div>
        </>
    )
}