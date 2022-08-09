import {makeAutoObservable} from 'mobx'
import {Column, List, Paging, Selection} from '@types'

export class TableProviderStore {
    private _selection: Selection = {
        all: false,
        ids: [],
        excludeIds: [],
        total: 0
    }
    private _paging: Paging = {
        page: 1,
        count: 5
    }

    private _dataSource: List<any> = {items: [], total: 0}

    private _columns: Column[] = []

    get selection(): Selection {
        return {...this._selection, total: this._dataSource.total}
    }

    get paging(): Paging {
        return this._paging
    }

    get columns(): Column[] {
        return this._columns
    }

    get dataSource(): List<any> {
        return this._dataSource
    }

    constructor() {
        makeAutoObservable(this)
    }

    setPage(page: number): void {
        this._paging.page = page
    }

    setCountPerPage(count: number): void {
        this._paging.count = count
    }

    setPaging(paging: Paging): void {
        this._paging = paging
    }

    setColumns(columns: Column[]): void {
        this._columns = columns
    }

    setDataSource(dataSource: List<any>): void {
        this._dataSource = dataSource
    }

    toggleSelect(check: boolean, id: string): void {
        const {all, ids, excludeIds} = this._selection
        if (all) {
            if (check) {
                this._selection.excludeIds = excludeIds.filter(itemId => itemId !== id)
            } else {
                excludeIds.push(id)
            }
        } else {
            if (check) {
                ids.push(id)
            } else {
                this._selection.ids = ids.filter(itemId => itemId !== id)
            }
        }

        if (this._selection.ids.length === this.dataSource?.total) {
            this.toggleAllSelect(true)
        }

        if (this._selection.excludeIds.length === this.dataSource?.total) {
            this.toggleAllSelect(false)
        }
    }

    toggleAllSelect(all: boolean): void {
        this._selection.all = all
        this._selection.ids = []
        this._selection.excludeIds = []
    }

    getSelectionById(id: string): boolean {
        const {all, ids, excludeIds} = this._selection
        return !excludeIds.includes(id) && (all || ids.includes(id))
    }
}