import { LogsProps } from "@/types/CustomTypes";

export function LogsCard({id, statusCode, status, message}: LogsProps){
    return(
        <div className="flex gap-5 w-125 mx-auto border rounded-2xl p-3">
            <p># {id}</p>
            <p>{statusCode}</p>
            <p>{status}</p>
            <p>{message}</p>
        </div>
    )
}
