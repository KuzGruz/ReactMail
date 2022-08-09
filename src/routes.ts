import Mailbox from './pages/Mailbox'
import Letter from './pages/Letter'
import {IRoute} from '@types'

export const appRoutes: IRoute[] = [
    {path: '/', component: Mailbox},
    {path: '/letter/:id', component: Letter}
]