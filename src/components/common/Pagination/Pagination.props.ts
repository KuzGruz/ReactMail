import {Paging} from '@types'

export interface PaginationProps {
    paging: Paging
    total: number
    onChange: (pagination: Paging) => void
}