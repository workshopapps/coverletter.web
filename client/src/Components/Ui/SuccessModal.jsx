import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import successCheck from '../../Assets/success-check.svg'

import './SuccessModal.css'
const SuccessModal = props => {        
    const { onClose } = props;
    const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
        onClose();
    }
    }, [onClose]);
    useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    }, [closeOnEscapeKeyDown]);

    return ( 
        <div className={`modal text-center bg-[#03286d66] fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center opacity-0 z-10
        h-screen
        ${props.show ? 'show': ''}`} onClick={props.onClose}>
            <div className="modal-content w-[327px] h-[368px] bg-white
            tb:w-[377px] tb:h-[398px]
            lg:w-[446px]" onClick={e => e.stopPropagation()}>
                <div className="modal-body py-[25px] px-[30px]">
                    <div className="success-btn w-fit mx-auto mb-10">
                        <img className="text-center w-[100px]
                        tb:w-[150px]" src={successCheck} alt="" />
                    </div>
                    <div className="modal-body-text">
                        <p className="text-[16px] leading-6 text-gray-700 font-semibold mb-10">{props.children}</p>    
                    </div>
                   <div className="home-btn">
                        <Link to='/'>
                            {/* {props.input} */}
                        </Link>
                   </div>
                </div>
            </div>
        </div>
     );
}
 
export default SuccessModal;