import React, {FC, useContext, useEffect} from 'react'
import {TableCheckboxProps} from './TableCheckbox.props'
import {observer} from 'mobx-react-lite'
import Checkbox from '@components/controls/Checkbox/Checkbox'
import {TableContext} from '@context/table.context'
import {SelectionAllItem} from '@utils/consts'

const TableCheckbox: FC<TableCheckboxProps> = ({isMain, id}) => {
    const {controller} = useContext(TableContext)!

    useEffect(() => {
        if (id !== SelectionAllItem && controller.selection.all) {
            controller.toggleSelect(true, id)
        }
    }, [controller.selection.all])

    const onCheck = (check: boolean) => {
        if (id === SelectionAllItem) {
            controller.toggleAllSelect(check)
        } else {
            controller.toggleSelect(check, id)
        }
    }

    return <Checkbox onChange={onCheck} checked={controller?.getSelectionById(id)}/>
}

export default observer(TableCheckbox)