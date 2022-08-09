import React, {FC} from 'react'
import Input from '@components/controls/Input/Input'
import Button from '@components/Button/Button'
import {GroupFormProps} from '@ui/GroupForm/GroupForm.props'
import useForm from '@hooks/useForm/useForm'
import Validators from '@utils/validators'

const GroupForm: FC<GroupFormProps> = ({onSubmit, defaultValue, buttonTitle = 'Создать'}) => {
    const {
        state,
        submit
    } = useForm({title: [defaultValue, [Validators.required({message: 'Обязательное поле'})]]})

    const onFormSubmit = (payload: { title: string }) => {
        if (onSubmit) {
            onSubmit(payload.title)
        }
    }
    return (
        <form onSubmit={submit(onFormSubmit)}>
            <Input placeholder="Название папки"
                   value={state.title.value}
                   error={state.title.errors[0]?.message}
                   onChange={state.title.patchValue}/>
            <div className="mt-3">
                <Button btnStyle="stroke" type="submit">{buttonTitle}</Button>
            </div>
        </form>
    )
}

export default GroupForm