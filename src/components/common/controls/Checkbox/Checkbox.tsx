import React, {BaseSyntheticEvent, FC} from 'react'
import {CheckboxProps} from '@components/controls/Checkbox/Checkbox.props'

const Checkbox: FC<CheckboxProps> = ({id, label, onChange, ...props}) => {
    const handleChange = (event: BaseSyntheticEvent) => onChange && onChange(event.target.checked)
    return (
        <div className="form-check">
            <input className="form-check-input" {...props} id={id} type="checkbox" onChange={handleChange}/>
            { label && <label className="form-check-label" htmlFor={id}>{label}</label>}
        </div>
    )
}

export default Checkbox