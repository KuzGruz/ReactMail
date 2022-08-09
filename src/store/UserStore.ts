import {makeAutoObservable} from 'mobx'
import userService from '@services/UserService'
import {CurdService, IUser} from '@types'
import {user1} from '@mock'

class UserStore {


    private readonly userKey: string = 'user'
    private _user: IUser | undefined = undefined

    get user(): IUser | undefined {
        return this._user
    }

    set user(user: IUser | undefined) {
        this._user = user
    }

    constructor(private readonly apiService: CurdService<IUser>) {
        makeAutoObservable(this)
    }

    signIn(): void {
        this.user = this.apiService.get(this.userKey) || this.signUp()
    }

    signUp(): IUser {
        this.apiService.create(this.userKey, user1)
        return user1
    }
}

export default new UserStore(userService)