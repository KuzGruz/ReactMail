import { BaseSyntheticEvent } from 'react'
import {ValidatorFn} from '@types'

export type UseFormSubmitFn = (fn: Function) => (event: BaseSyntheticEvent) => void
export type UseFormSetErrorFn = (name: string, error: Error) => void
export type UseFormPatchValueFn = (data: {[key: string]: any}) => void

export interface Error {
    code: string
    message: string
}

export interface FormControl {
    value: any
    errors: Error[]
    valid: boolean
    touched: boolean
    validators: ValidatorFn[]
    patchValue: (value: any) => void
}

export interface UseFormInit {
    [key: string]: [any, ValidatorFn[]?]
}

export interface UseFormState {
    [key: string]: FormControl
}

export interface UseForm {
    state: UseFormState
    submit: UseFormSubmitFn
    setError: UseFormSetErrorFn
    patchValue: UseFormPatchValueFn
    reset: () => void
}

export interface UseFormConfig {
    validateOnChange?: boolean
}