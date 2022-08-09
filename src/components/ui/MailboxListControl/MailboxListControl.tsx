import React, {FC, useContext} from 'react'
import styles from './MailboxListControl.module.css'
import {MailboxListControlProps} from '@ui/MailboxListControl/MailboxListControl.props'
import {ReactComponent as DeleteIcon} from '@icons/delete.svg'
import {ReactComponent as SpamIcon} from '@icons/spam.svg'
import {ReactComponent as OpenMailIcon} from '@icons/spam.svg'
import {ReactComponent as FolderIcon} from '@icons/folder.svg'
import cn from 'classnames'
import {observer} from 'mobx-react-lite'
import {TableContext} from '@context/table.context'
import mailStore from '@store/MailStore'
import {defaultMailboxGroups} from '@ui/Navbar/Navbar.props'

const MailboxListControl: FC<MailboxListControlProps> = () => {
    const {controller} = useContext(TableContext)!

    const sentTo = (target: string) => () => {
        if (controller) {
            mailStore.sentToFolder(mailStore.activeMailBox!, target, controller.selection!)
        }
    }

    const sentToCustomFolder = () => {
    }

    const markAsVisited = () => () => {
    }

    return (
        <ul className="list-group list-group-horizontal-sm">
            <li className={cn('list-group-item', styles['action-item'])} onClick={sentTo(defaultMailboxGroups.Deleted)}>
                <DeleteIcon className={styles.icon}/>
                Удалить
            </li>
            <li className={cn('list-group-item', styles['action-item'])} onClick={sentTo(defaultMailboxGroups.Spam)}>
                <SpamIcon className={styles.icon}/>
                Спам
            </li>
            <li className={cn('list-group-item', styles['action-item'])} onClick={markAsVisited}>
                <OpenMailIcon className={styles.icon}/>
                Прочитано
            </li>
            <li className={cn('list-group-item', styles['action-item'])} onClick={sentToCustomFolder}>
                <FolderIcon className={styles.icon}/>
                В папку
            </li>
        </ul>
    )
}

export default observer(MailboxListControl)