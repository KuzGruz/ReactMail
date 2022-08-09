import React, {FC, PropsWithChildren} from 'react'
import cn from 'classnames'
import styles from './Button.module.css'
import {ButtonProps} from './Button.props'

const Button: FC<PropsWithChildren<ButtonProps>> = ({children, className, btnStyle = 'fill', ...props}) => {
    return (
        <button {...props} className={cn(className, styles[btnStyle], styles.btn)}>
            {children}
        </button>
    )
}

export default Button