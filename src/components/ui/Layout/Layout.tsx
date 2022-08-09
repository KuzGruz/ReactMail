import React, {FC, PropsWithChildren, useEffect} from 'react'
import './Layout.module.css'
import userStore from '@store/UserStore'
import mailboxStore from '@store/MailStore'
import Header from '@ui/Header/Header'
import Navbar from '@ui/Navbar/Navbar'

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {

    useEffect(() => {
        userStore.signIn()
        mailboxStore.loadMailBox()
    }, [])

    return (
        <>
            <Header/>
            <main>
                <aside><Navbar/></aside>
                <section>{children}</section>
            </main>
        </>
    )
}

export default Layout