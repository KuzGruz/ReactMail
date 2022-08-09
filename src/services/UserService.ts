import {CurdService, IUser} from '@types'
import {mailBox} from '@mock'


class UserService implements CurdService<IUser> {
    get(id: string): IUser | undefined {
        return JSON.parse(localStorage.getItem(id)!) as IUser
    }

    create(id: string, user: IUser): void {
        localStorage.setItem(id, JSON.stringify(user))
        localStorage.setItem('mailbox', JSON.stringify(mailBox))
    }
}

export default new UserService()