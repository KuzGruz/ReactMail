import {Paging} from '@types'

export function paging<T>({page, count}: Paging, items: T[]): T[] {
    if (!items) {
        return []
    }
    const startIndex = (page - 1) * count
    return items.slice(startIndex, startIndex + count)
}

export function centerArray(current: number, limit: number, min: number, max: number): number[] {
    const start = current < limit ? min : current - limit + 1
    const end = current < limit ? limit : current + 1

    return range(start, (end > max ? max : end) + 1)
}

export function range(start: number, end: number, step: number = 1) {
    let output = []
    if (typeof end === 'undefined') {
        end = start
        start = 0
    }
    for (let i = start; i < end; i += step) {
        output.push(i)
    }
    return output
}