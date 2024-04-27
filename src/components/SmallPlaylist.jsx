import { Link } from "react-router-dom";




export default function SmallPlaylist({title, img, id}) {
    return (
        <Link to={'/playlist/' + id}>
            <div className="cursor-pointer select-none w-[360px] h-[100px] bg-[#303030] text-white flex justify-start items-center gap-5">
                <img className="w-[100px] h-[100px] object-cover" src={img} alt="picture" />
                <span>{title}</span>
            </div>
        </Link>
    )
}