import {CurdService, IMailbox} from '@types'


class MailboxService implements CurdService<IMailbox> {
    get(id: string): IMailbox | undefined {
        return JSON.parse(localStorage.getItem(id)!) as IMailbox
    }

    create(id: string, mailbox: IMailbox): void {
        localStorage.setItem(id, JSON.stringify(mailbox))
    }

    put(id: string, mailbox: IMailbox): void {
        localStorage.setItem(id, JSON.stringify(mailbox))
    }
}

export default new MailboxService()