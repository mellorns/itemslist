export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = value => {
    if(value) return undefined;
    return "Field is required"
}

export const maxLengthCreator = (maxLength: number):FieldValidatorType => (value) => {
    if(value.length > maxLength) return "Max symbols was reached"
    return undefined
}
export const numberRequired = (value: any) => value && isNaN(Number(value)) ? 'Must be a number' : undefined
