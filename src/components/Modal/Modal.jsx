import { useState } from "react"
import {ModalBox, ModalBackground, ModalTitle, ModalHeader, ModalButton} from './styles'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {BiPlusCircle} from "react-icons/bi"
import {BsPencil} from "react-icons/bs"

const Modal = ({children, title, icon}) => {
    const [open, setOpen] = useState(false)
    return(
        <>
        <ModalButton onClick={() => setOpen(!open)}>
            {icon === "edit" ?
            <BsPencil style={{height:"25px", paddingBottom:"5px" ,verticalAlign: "middle"}}/>
            :
            <BiPlusCircle style={{height:"25px", paddingBottom:"5px" ,verticalAlign: "middle"}}/>
            }
            {title}
        </ModalButton>
        {open && 
        <ModalBackground >
            <ModalBox>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <AiOutlineCloseCircle 
                    onClick={() => setOpen(!open)} 
                    style={{fontSize: "30px",position: "absolute", right: "20px"}}/>
                </ModalHeader>

                {children}
            </ModalBox>
        </ModalBackground>
        }
        </>
    )
}

export default Modal;
