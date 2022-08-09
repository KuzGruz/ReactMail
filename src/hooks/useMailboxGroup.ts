import {createSearchParams, useLocation, useNavigate, useSearchParams} from 'react-router-dom'
import {useCallback, useEffect} from 'react'
import mailboxStore from '@store//MailStore'
import {defaultMailboxGroups} from '@ui/Navbar/Navbar.props'

export const useMailboxGroup = () => {
    const [searchParams] = useSearchParams()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const currentBox = searchParams.get('box')
    const targetPath = '/'
    const mailbox = mailboxStore.mailbox

    const changeBoxQuery = useCallback((box: string) => {
        navigate({pathname: targetPath, search: createSearchParams({box}).toString()})
    }, [])

    useEffect(() => {
        if (targetPath === pathname && mailbox) {
            if (!currentBox || !mailbox?.boxGroups.find(b => b.id === currentBox)) {
                changeBoxQuery(defaultMailboxGroups.Incoming)
            }
            mailboxStore.setGroupActive(currentBox as string)
        }
    }, [currentBox, mailbox])

    return changeBoxQuery
}

