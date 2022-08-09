import React, {FC, useState} from 'react'
import cn from 'classnames'
import styles from './Navbar.module.css'
import {NavbarProps} from './Navbar.props'
import {observer} from 'mobx-react-lite'
import {useMailboxGroup} from '@hooks/useMailboxGroup'
import mailStore from '@store/MailStore'
import Button from '@components/Button/Button'
import Modal from '@components/Modal/Modal'
import GroupForm from '@ui/GroupForm/GroupForm'
import {ReactComponent as EditIcon} from '@icons/edit.svg'
import {ReactComponent as DeleteIcon} from '@icons/close.svg'

const Navbar: FC<NavbarProps> = (props) => {
    const changeGroup = useMailboxGroup()
    const [openAddModal, setOpenAddModal] = useState<boolean>(false)
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)

    const createMailbox = (title: string) => {
        mailStore.addGroup(title)
        setOpenAddModal(false)
    }

    const deleteMailbox = (id: string) => {
        mailStore.deleteGroup(id)
    }

    const editMailbox = (id: string) => (title: string) => {
        mailStore.editGroup(id, title)
        setOpenEditModal(false)
    }

    const togglePopup = (isOpen: boolean, mode: 'add' | 'edit') => () => {
        if (mode === 'add') {
            setOpenAddModal(isOpen)
        } else if (mode === 'edit') {
            setOpenEditModal(isOpen)
        }
    }

    return (
        <nav {...props}>
            <ul>
                {mailStore.mailbox?.boxGroups?.map(item =>
                    <li className={cn(styles.group, {[styles.active]: item.id === mailStore.activeMailBox})}
                        key={item.id}
                        onClick={() => changeGroup(item.id)}>
                        <div className={styles['group-title']}>{item.title}</div>
                        {item.type === 'custom' &&
                            <div className={styles['group-actions']}>
                                <EditIcon className={styles.icon} onClick={togglePopup(true, 'edit')}/>
                                <Modal open={openEditModal} header="Изменить папку"
                                       onClose={togglePopup(false, 'edit')}>
                                    <GroupForm onSubmit={editMailbox(item.id)} defaultValue={item.title} buttonTitle="Изменить"/>
                                </Modal>

                                <DeleteIcon className={styles.icon} onClick={() => deleteMailbox(item.id)}/>
                            </div>
                        }
                    </li>
                )}
            </ul>

            <Button onClick={togglePopup(true, 'add')}>Создать папку</Button>

            <Modal open={openAddModal} header="Создать папку" onClose={togglePopup(false, 'add')}>
                <GroupForm onSubmit={createMailbox}/>
            </Modal>
        </nav>
    )
}

export default observer(Navbar)