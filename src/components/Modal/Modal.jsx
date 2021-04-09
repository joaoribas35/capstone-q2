import { useState } from "react"
import {ModalBox, ModalBackground, ModalTitle, ModalHeader} from './styles'
import {AiOutlineCloseCircle} from "react-icons/ai"

const Modal = ({children, title}) => {
    const [open, setOpen] = useState(false)
    return(
        <>
        <button onClick={() => setOpen(!open)}>{title}</button>
        {open && 
        <ModalBackground >
            <ModalBox>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <AiOutlineCloseCircle onClick={() => setOpen(!open)} style={{marginLeft:"80px"}}/>
                </ModalHeader>

                {children}
            </ModalBox>
        </ModalBackground>
        }
        </>
    )
}

export default Modal;
