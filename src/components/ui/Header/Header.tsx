import React, {FC} from 'react'
import cn from 'classnames'
import styles from './Header.module.css'
import {HeaderProps} from './Header.props'
import {observer} from 'mobx-react-lite'
import Avatar from '@components/Avatar/Avatar'
import userStore from '@store/UserStore'


const Header: FC<HeaderProps> = (props) => {
    const catchHeader = true
    return (
        <header {...props} className={cn(styles.header, {[styles.sticky]: catchHeader})}>
            <div className={styles.logo}>
                <img src="assets/images/logo.png" alt="Logo"/>
                MailClone
            </div>
            <div className={styles.user}>
                <span className={styles.name}>{userStore.user?.name}</span>
                <Avatar src="assets/images/user.jpg" alt="User"/>
            </div>
        </header>
    )
}

export default observer(Header)