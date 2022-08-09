import React, {FC, PropsWithChildren} from 'react'
import ReactDOM from 'react-dom'
import {ReactComponent as CloseIcon} from '@icons/close.svg'
import styles from './Modal.module.css'
import {ModalProps} from './Modal.props'
import cn from 'classnames'

const Modal: FC<PropsWithChildren<ModalProps>> = ({children, open, header, onClose}) => {
    const parent = document.getElementById('portal') as Element
    if (!open || !parent) {
        return null
    }
    return ReactDOM.createPortal(
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <header className={styles['modal-header']}>
                    {header}
                    <CloseIcon className={cn(styles.close, {[styles.right]: !header})} onClick={onClose}/>
                </header>
                <div className={styles['modal-body']}>{children}</div>
            </div>
        </div>
        , parent)
}

export default Modal