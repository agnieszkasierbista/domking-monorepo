export interface FieldState extends Validation, Format {
}

export interface Validation {
    isValid: boolean | undefined,
    errors: string[],
}

export interface Format {
    value: string,
    isFormatted: boolean
}

export interface AutoValidateInputProps {
    validate: ((value: string) => Validation)[];
    formatTo?: (value: string) => Format;
    formatFrom?: (formattedValue: string) => string;
    observe?: (inputValue: string) => void
}