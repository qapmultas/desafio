export type Preferences = {
    theme: boolean
    sendEmail: boolean
    saveLogin: boolean
    simulate: boolean
}

export type SwitchProps = {
    id: string
    title: string
    description: string
    checked: boolean
    onchange: (checked : boolean) => void
}

export type SwitchConfig = {
    id: keyof Preferences
    title: string
    description: string
}

export type CardConfig = {
    title: string
    value: number
}

export type SavePreferencesResult =
  | {
      success: true
      data: {
        message: string
      }
      status?: number
    }
  | {
      success: false
      data: {
        erro: string
      }
      status?: number
    }

export type LogsProps = {
  id:number
  statusCode?: number
  status: string,
  message?: string
}
