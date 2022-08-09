import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
}

export enum defaultMailboxGroups {
    Incoming = 'Incoming',
    Sent = 'Sent',
    Drafts = 'Drafts',
    Deleted = 'Deleted',
    Spam = 'Spam'
}