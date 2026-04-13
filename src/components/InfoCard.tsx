import { CardConfig } from "@/types/CustomTypes";

export function InforCard({title, value}: CardConfig){
    return(
        <div className="border rounded-2xl w-fit p-3 text-center">
            <h2>{value}</h2>
            <p>{title}</p>
        </div>
    )
}
