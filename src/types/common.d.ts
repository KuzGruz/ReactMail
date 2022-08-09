import {FC, ReactNode} from 'react'
import {Error} from '@hooks/useForm/useForm.models'

export interface IRoute {
    path: string
    component: FC
}

export interface IUser {
    id: string
    name: string
    email: string
    mailbox: string;
}

export interface IMailbox {
    id: string
    userId: string
    boxGroups: IMailboxGroup[]
    letters: ILetter[]
}

export interface IMailboxGroup {
    id: string
    title: string
    type: 'default' | 'custom'
    total?: number
    count?: number
}

export interface ILetter {
    id: string
    from: IUser
    to: IUser
    theme: string;
    message: string;
    date: string | number | Date;
    group: string;
    visit?: boolean;
}

export interface CurdService<T> {
    get: (id: string) => T | undefined

    create: (id: string, entity: T) => void

    put?: (id: string, entity: T) => void
}

export interface Paging {
    page: number
    count: number
}

export interface List<T> {
    items: T[]
    total: number
}

export interface Column {
    code: string
    head: string | CellFn
    cell: string | CellFn
}

export interface Selection {
    all: boolean;
    excludeIds: string[]
    ids: string[]
    total?: number
}

export enum SelectionHardCode {
    All = 'all'
}

export type ValidatorFn = (value: any) => Error | null
export type CellFn = (...args: any[]) => ReactNode
