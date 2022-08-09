import React, {FC} from 'react'
import {observer} from 'mobx-react-lite'
import {TableProvider} from '@context/table.context'
import MailboxList from '@ui/MailboxList/MailboxList'

const Mailbox: FC = () => {
    return (
        <TableProvider>
            <MailboxList/>
        </TableProvider>
    )
}

export default observer(Mailbox)