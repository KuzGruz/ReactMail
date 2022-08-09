import React, {BaseSyntheticEvent, FC} from 'react'
import {InputProps} from '@components/controls/Input/Input.props'
import cn from 'classnames'

const Input: FC<InputProps> = ({className, onChange, error, id, placeholder, ...props}) => {
    const handleInput = (event: BaseSyntheticEvent) => onChange(event.target.value)
    return (
        <div className="form-group">
            <label htmlFor={id}>{placeholder}</label>
            <input {...props} className={cn('form-control', {'is-invalid': error})} id={id} placeholder={placeholder}
                   onChange={handleInput}/>
            {error && <small className="invalid-feedback">{error}</small>}
        </div>
    )
}

export default Input