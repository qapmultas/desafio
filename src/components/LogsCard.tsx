import { LogsProps } from "@/types/CustomTypes";

export function LogsCard({id, statusCode, status, message}: LogsProps){
    return(
        <div className="flex items-center gap-5 w-full mx-auto border border-[var(--border-color)] rounded-md p-2 bg-[var(--bg-color)]">
            <span className={`
                min-h-10 p-0.5
                ${statusCode == 200 ? "bg-[var(--success-bg)]":"bg-[var(--error-bg)]"}
                `}></span>
            <p className="text-[var(--text-muted)]"> # {id}</p>
            <p className={`
            border p-1 rounded-md text-center w-12
            ${statusCode == 200 ? "text-[var(--success-color)] bg-[var(--success-bg)]":"text-[var(--error-color)]  bg-[var(--error-bg)]"}`

            }>{statusCode}</p>
            <p className={`
            border p-1 rounded-md min-w-20 text-center
            ${status == "Sucesso" ? "text-[var(--success-color)] bg-[var(--success-bg)]":"text-[var(--error-color)]  bg-[var(--error-bg)]"}`
            }>{status}</p>
            <p>{message}</p>
        </div>
    )
}
