import React, {FC} from 'react'
import {PaginationProps} from '@components/Pagination/Pagination.props'
import cn from 'classnames'
import {centerArray} from '@utils/utils'

const Pagination: FC<PaginationProps> = ({total, paging, onChange}) => {
    if (paging.count > total) {
        return null
    }
    const pages = Math.ceil(total / paging.count)
    const currentPage = paging.page
    const firstDisable = currentPage === 1
    const lastDisable = currentPage === pages
    const numberedPages = centerArray(currentPage, 5, 1, pages)

    const setPage = (page: number) => {
        if (page < 1 || page > pages) {
            return
        }
        onChange({
            count: paging.count,
            page
        })
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={cn('page-item', {disabled: firstDisable})} onClick={() => setPage(1)}>
                    <a className="page-link" href="#">First</a>
                </li>
                <li className={cn('page-item', {disabled: firstDisable})} onClick={() => setPage(currentPage - 1)}>
                    <a className="page-link" href="#">Previous</a>
                </li>
                {numberedPages.map(i =>
                    <li className={cn('page-item', {active: currentPage === i})} key={i} onClick={() => setPage(i)}>
                        <a className="page-link" href="#">{i}</a>
                    </li>
                )}
                <li className={cn('page-item', {disabled: lastDisable})} onClick={() => setPage(currentPage + 1)}>
                    <a className="page-link" href="#">Next</a>
                </li>
                <li className={cn('page-item', {disabled: lastDisable})} onClick={() => setPage(pages)}>
                    <a className="page-link" href="#">Last</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination