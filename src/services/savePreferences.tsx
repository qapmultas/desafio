import { Preferences, SavePreferencesResult } from "@/types/CustomTypes";

export async function savePreferences(preferences:Preferences): Promise<SavePreferencesResult>{
    try{
        const response = await fetch('/savepreferences', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(preferences)
        })
        const data = await response.json()
        console.log(response.ok)
        if (!response.ok){
            return{
                success: false,
                data: {
                    erro: "Erro ao salvar dados"
                },
                status: response.status
                }
        }
        return(
            {
                success: true,
                data: {
                    message: data.message
                },
                status: response.status
            }
        )
    }catch(error){
        return(
            {
                success: false,
                data: {
                    erro: "Erro interno do servidor, " + error
                },
                status: 500
        }
        )
    }
}
