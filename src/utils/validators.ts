import {ValidatorFn} from '@types'

interface ValidatorConfig {
    message?: string;
}

function max(n: number, config?: ValidatorConfig): ValidatorFn {
    return (value: string | number) => {
        const message = config?.message || ''
        if (typeof value === 'string') {
            return value.length > n ? { code: 'max', message } : null
        } else {
            return value > n ? { code: 'max', message } : null
        }
    }
}

function min(n: number, config?: ValidatorConfig): ValidatorFn {
    return (value: string | number) => {
        const message = config?.message || ''
        if (typeof value === 'string') {
            return value.length < n ? { code: 'min', message } : null
        } else {
            return value < n ? { code: 'min', message } : null
        }
    }
}

function email(config?: ValidatorConfig): ValidatorFn {
    return (value: string) => {
        const message = config?.message || ''
        const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regExp.test(value) ? null : { code: 'email', message }
    }
}

function required(config?: ValidatorConfig): ValidatorFn {
    return (value: any) => {
        let valid
        if (value === null || value === undefined) {
            valid = false
        } else if (Array.isArray(value)) {
            valid = value.length
        } else if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
            valid = !!value
        } else {
            valid = Object.keys(value).length
        }
        const message = config?.message || ''
        return valid ? null : { code: 'required', message }
    }
}

export default {
    max,
    min,
    email,
    required
}
