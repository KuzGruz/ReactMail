import React, {FC, useContext, useEffect} from 'react'
import {mailboxListColumns, MailboxListProps} from './MailboxList.props'
import mailStore from '@store/MailStore'
import {observer} from 'mobx-react-lite'
import {TableContext} from '@context/table.context'
import Table from '@components/Table/Table'
import MailboxListControl from '@ui/MailboxListControl/MailboxListControl'

const MailboxList: FC<MailboxListProps> = () => {
    const {controller} = useContext(TableContext)!

    useEffect(() => {
        if (controller) {
            controller.setCountPerPage(5)
            controller.setColumns(mailboxListColumns)
            const data = mailStore.loadLetters(controller?.paging!, mailStore.activeMailBox!)
            controller.setDataSource(data)
        }
    }, [controller.paging, mailStore.activeMailBox])

    return (
        <>
            <MailboxListControl/>
            <Table items={controller?.dataSource?.items} total={controller?.dataSource?.total}/>
        </>

    )
}

export default observer(MailboxList)