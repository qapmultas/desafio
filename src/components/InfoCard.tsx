import { CardConfig } from "@/types/CustomTypes";

export function InforCard({title, value}: CardConfig){
    return(
        <div className={`border border-[var(--border-color)] w-44 rounded-md p-3 text-center text-color bg-[var(--bg-card)] shadow-[var(--shadow)] flex flex-col justify-center gap-2
        hover:shadow[var(--shadow-hover)] hover:scale-105 transform translate-1 transition-all duration-300`}>
            <h2 className="font-bold text-2xl">{value}</h2>
            <p>{title}</p>
        </div>
    )
}
