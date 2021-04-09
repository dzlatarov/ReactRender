import React from 'react'
import ReactDOM from 'react-dom'

const Modal = () => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standart modal visible active">
                Some added text for the modal
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal