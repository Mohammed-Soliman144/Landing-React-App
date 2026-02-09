interface cardContent {
    imgSrc: string, 
    imgAlt: string,
    contentTitle: string,
    contentDescription: string,
    items: string[]
}


export default function Card({imgSrc, imgAlt, contentTitle, contentDescription, items}: cardContent) {
    return <article className="relative w-full flex flex-col gap-5 bg-secondary rounded-2xl shadow-xl transition-all duration-700 hover:-translate-y-4 before:content[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl hover:before:bg-foreground/15 hover:border hover:border-foreground/90">
        <div className="image shimmer-shine rounded-t-2xl min-h-55.5">
            <img src={imgSrc} alt={imgAlt} className="w-full object-center aspect-5/3"/>
        </div>
        <div className="content capitalize px-2 pl-4.75">
            <h3 className="text-xl font-bold text-white mb-2">{contentTitle}</h3>
            <p className="text-base text-slate-400">{contentDescription}</p>
        </div>
        <ul className="tags flex justify-start items-center gap-2 capitalize px-3 mb-5 align-bottom">
            {
                items.map((item, index)=> (
                    <li key={index} className="border-[0.5px] border-foreground/90 rounded-full px-3 py-1 text-foreground/90 text-center bg-slate-700 text-sm">
                        {item}
                    </li>
                ))
            }
        </ul>
    </article>
}