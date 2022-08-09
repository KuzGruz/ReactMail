import {createContext, FC, PropsWithChildren} from 'react'
import {TableProviderStore} from '@store/TableProviderStore'

interface TableContext {
    controller: TableProviderStore
}

export const TableContext = createContext<TableContext | null>(null)

export const TableProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const tableStore = new TableProviderStore()

    return (
        <TableContext.Provider value={{controller: tableStore}}>
            {children}
        </TableContext.Provider>
    )
}