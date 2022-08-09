import {Column, ILetter} from '@types'
import {format} from 'date-fns'
import TableCheckbox from '@components/TableCheckbox/TableCheckbox'
import {SelectionAllItem} from '@utils/consts'

export interface MailboxListProps {
}

export const mailboxListColumns: Column[] = [
    {
        code: 'check',
        head: () => <TableCheckbox isMain={true} id={SelectionAllItem}/>,
        cell: (item: ILetter) => <TableCheckbox isMain={false} id={item.id}/>
    },
    {code: 'author', head: 'Автор', cell: (item: ILetter) => item.from.name},
    {code: 'date', head: 'Дата', cell: (item: ILetter) => format(new Date(item.date), 'dd MMM yyyy')},
    {code: 'content', head: 'Текст письма', cell: (item: ILetter) => item.message}
]
