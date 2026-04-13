import { SwitchProps } from "@/types/CustomTypes";

export function InputSwitch({id, title, description, checked, onchange }: SwitchProps){
    return(
        <div className="w-full p-3 border rounded-2xl flex items-center justify-between gap-5">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="relative inline-block w-11 h-5">
            <input checked={checked} id={id} type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" onChange={(e) => onchange(e.currentTarget.checked)}/>
            <label htmlFor={id} className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
            </label>
            </div>
        </div>
    )
}
