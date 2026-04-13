'use client'

import { useEffect, useRef, useState } from "react"
import { InforCard } from "./InfoCard"
import { InputSwitch } from "./InputSwitch"
import { CardConfig, LogsProps, Preferences, SwitchConfig } from "@/types/CustomTypes"
import { savePreferences } from "@/services/savePreferences"
import { LogsCard } from "./LogsCard"


export function PreferencesDasboard(){
    const [clicks, setClicks] = useState<number>(0)
    const [requestSend, setRequestSend] = useState<number>(0)
    const requestBlock = Math.max(clicks - requestSend)
    const [requestFail, setRequestFail] = useState<number>(0)
    const [preferences, setPreferences] = useState<Preferences>({
        theme: false,
        sendEmail: false,
        saveLogin: false,
        simulate: false
    })
    const preferencesRef = useRef(preferences)
    useEffect(() => { preferencesRef.current = preferences }, [preferences])
    function handlepreferences(key: keyof Preferences, value:boolean){
        setPreferences((prev) => ({
            ...prev, [key]:value
        }))
        setClicks((prev) => prev + 1)
        scheduleSave()
    }
    useEffect(()=> {
        if(preferences.theme){
            document.body.classList.add("dark")
        }
        else {
            document.body.classList.remove("dark")
        }
    }, [preferences.theme])
    const listCards: CardConfig[] = [
        {
            title:"clicks",
            value: clicks
        },
        {
            title:"Requests feitas",
            value: requestSend
        },
        {
            title:"Requests bloqueadas",
            value: requestBlock
        },
        {
            title:"Request falhas",
            value: requestFail
        },
    ]
    const listSwitch: SwitchConfig[] = [
        {
            id: "theme",
            title: "Tema Escuro",
            description: "Alternar entre tema claro ou escuro"
        },
        {
            id: "sendEmail",
            title: "Enviar notificação pelo E-mail",
            description: "Aceita enviar notificações por e-mail"
        },
        {
            id:"saveLogin",
            title: "Salvar login",
            description: "Salvar login para a próxima entrada."
        }
    ]

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null >(null)
    useEffect(() => {
        return () => {if(debounceRef.current){
            clearTimeout(debounceRef.current)
        }}
    }, [])

    function scheduleSave(){
        if(debounceRef.current){
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(async () => {
            const response = await savePreferences(preferencesRef.current)
            console.log(response)
            if(!response.success){
                setRequestFail((prev) => prev + 1)
            }
            setRequestSend((prev) => prev + 1)
            const log :LogsProps = {
                id: logs.length + 1,
                statusCode: response.status,
                status: response.success ? "Sucesso" : "Erro",
                message:  response.success ? response.data.message : response.data.erro
            }
            setLogs((prev) => [log, ...prev])

        }, 1200)
    }
    const [logs, setLogs] = useState<LogsProps[]>([])
    return(
        <div>
            <h1 className="text-4xl p-4 text-center">Desafio QAP Multas</h1>
            <section className="flex gap-5 w-125 m-auto p-4 justify-center">
                {listCards.map((item) => (<InforCard key={item.title} title={item.title} value={item.value}/>))}
            </section>
            <section className="flex flex-col gap-5 w-125 m-auto">
                {listSwitch.map((item) => (<InputSwitch key={item.id} id={item.id} title={item.title} description={item.description} checked={preferences[item.id]} onchange={(value) => handlepreferences(item.id, value)} />))}
                <div className="p-2 flex gap-4">
                    <input type="checkbox" name="simulate" id="simulate" checked={preferences.simulate} onChange={(e) => handlepreferences("simulate", e.currentTarget.checked)} />
                    <label htmlFor="simulate">Simular erro na próxima requisição</label>
                </div>
            </section>
            <section className="flex flex-col gap-3 border rounded-lg p-3 w-fit mx-auto">
                <h2>Logs</h2>
                {logs.map((item) => (<LogsCard key={item.id} id={item.id} statusCode={item.statusCode} status={item.status} message={item.message}/>))}
            </section>
        </div>
    )
}
