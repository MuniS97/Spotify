





export default function BrowseAll({img, title}) {
    console.log(img, title);
    return (
        <>
            <div className="w-60 h-60 rounded-xl text-white bg-[url({/images/browseAll.webp})]">
                <h3 className="text-3xl p-5">{title}</h3>
            </div>
        </>
    )
}