import { NextResponse } from "next/server"

export async function POST(request:Request){
   try{
        const payload = await request.json()
        if (payload.simulate) {
            return NextResponse.json(
                    {message: "Erro ao salvar os dados"},
                    {status: 400}
                )

        }
        return(
            NextResponse.json(
                { message: "Dados salvos com sucesso!"},
                { status: 200}

            )
        )
   }catch(error){
        return NextResponse.json(
            { message: "Erro inesperado no servidor", error },
            { status: 500 }
        )
   }
}
