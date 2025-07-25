export interface Option {
    value: string
    label: string
}

export interface CommandOption extends Option {
    execute: ((value: string) => void) | undefined
}