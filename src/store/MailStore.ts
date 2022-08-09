import {makeAutoObservable} from 'mobx'
import mailboxService from '@services/MailboxService'
import {CurdService, ILetter, IMailbox, List, Paging, Selection} from '@types'
import {v4} from 'uuid'
import {paging} from '@utils/utils'

class MailStore {

    private readonly mailboxKey: string = 'mailbox'
    private _mailbox: IMailbox | undefined = undefined
    activeMailBox: string | undefined

    get mailbox(): IMailbox | undefined {
        return this._mailbox
    }

    set mailbox(mailbox: IMailbox | undefined) {
        this._mailbox = mailbox
    }

    constructor(private readonly apiService: CurdService<IMailbox>) {
        makeAutoObservable(this)
    }

    loadMailBox(): void {
        this.mailbox = this.apiService.get(this.mailboxKey)
    }

    loadLetters(listFilter: Paging, box: string): List<ILetter> {
        if (!this.mailbox) {
            this.loadMailBox()
        }
        const letters = (this.mailbox?.letters || [] as ILetter[]).filter(letter => letter.group === box)
        return {
            items: paging(listFilter, letters),
            total: letters?.length
        }
    }

    setGroupActive(box: string): void {
        this.activeMailBox = box
    }

    addGroup(title: string): void {
        this._mailbox?.boxGroups.push({
            title,
            type: 'custom',
            id: v4()
        })
        this.apiService.put!(this.mailboxKey, this._mailbox as IMailbox)
    }

    deleteGroup(id: string): void {
        if (this._mailbox) {
            this._mailbox.boxGroups = this._mailbox?.boxGroups.filter(b => b.id !== id)
            this.apiService.put!(this.mailboxKey, this._mailbox as IMailbox)
        }
    }

    editGroup(id: string, title: string): void {
        if (this._mailbox) {
            const element = this._mailbox?.boxGroups.find(b => b.id === id)
            if (element) {
                element.title = title
            }
            this.apiService.put!(this.mailboxKey, this._mailbox as IMailbox)
        }
    }

    sentToFolder(from: string, to: string, selection: Selection): void {

    }
}

export default new MailStore(mailboxService)