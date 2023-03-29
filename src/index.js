import React, { useEffect, useRef, Fragment} from 'react';
import CloseIcon from './assets/close.svg';
import './style/Modal.css';

const Modal = ({ children, open, close, customStyle }) => {
    const backgroundStyle = {
        'backgroundColor': customStyle.backgroundColor
    };
    const modalStyle = {
        'backgroundColor': customStyle.modalColor,
        'width': customStyle.modalWidth
    };

    const closeBtnRef = useRef();
    const initFocus = () => {
        const closeBtn = closeBtnRef.current;
        if (closeBtn) {
            closeBtn.focus();
        };
    };
    const closeOnKey = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            return close();
        };
    };
    
    useEffect(() => {
        if (open) {initFocus()};

        document.body.addEventListener('keydown', closeOnKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnKey);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <Fragment>
			{open && (
				<div className="modal__global-container" style={backgroundStyle} onClick={close}>
                    <div className="modal" style={modalStyle} onClick={e => e.stopPropagation()}>
                        <button className="modal-closeBtn" ref={closeBtnRef} onClick={close}>
                            <CloseIcon />
                        </button>

                        <div className="modal-content">
                            {children}
                        </div>
                    </div>
				</div>
			)}
		</Fragment>
    );
};

export default Modal;

