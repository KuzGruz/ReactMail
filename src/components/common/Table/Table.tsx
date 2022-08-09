import React, {FC, useContext} from 'react'
import {TableContext} from '@context/table.context'
import {TableProps} from '@components/Table/Table.props'
import Pagination from '@components/Pagination/Pagination'
import {CellFn, Paging} from '@types'

const Table: FC<TableProps> = ({total, items}) => {
    const tableContext = useContext(TableContext)
    const columns = tableContext?.controller.columns || []

    const buildCell = (Cell: string | CellFn, item?: any) => {
        if (typeof Cell === 'string') {
            return Cell
        } else if (typeof Cell === 'function') {
            return Cell(item)
        }
        return null
    }

    const paginationChange = (paging: Paging) => {
        tableContext?.controller.setPaging(paging)
    }

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    {columns.map(col => <th scope="col" key={col.code}>{buildCell(col.head)}</th>)}
                </tr>
                </thead>
                <tbody>
                {items.map(item =>
                    <tr key={item.id}>
                        {columns.map(col => <td key={col.code + item.id}>{buildCell(col.cell, item)}</td>)}
                    </tr>
                )}
                </tbody>
            </table>
            <Pagination total={total} paging={tableContext?.controller.paging!} onChange={paginationChange}/>
        </>

    )
}

export default Table