import { IBase } from "./root.types"

export interface IPomodoroRoundResponse extends IBase {
    isCompleted?: boolean
    totalSeconds?: number
}

export interface IPomodoroSessionResponse extends IBase {
    isCompleted?: boolean
    rounds?: IPomodoroRoundResponse[]
}

export type TypePomodoroSessionState = Partial<
    Omit<IPomodoroSessionResponse, 'id' | 'created' | 'updatedAt'>
>

export type TypePomodoroRoundFormState = Partial<
    Omit<IPomodoroSessionResponse, 'id' | 'created' | 'updatedAt'>
>