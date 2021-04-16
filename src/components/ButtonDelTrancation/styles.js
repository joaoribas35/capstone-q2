import styled from 'styled-components'

export const ModalBox = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    background: #FFFFFF;
    border-radius: 10px;
    padding:20px ;
    color: black;
`

export const ModalBackground = styled.div`
    position: absolute;
    z-index: 9;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    background: rgba(0, 0, 0, 0.3);;
`

export const ModalButton = styled.button`
    background-color: #0093EE;
    width: 80px;
    margin: 10px;
    border: 0;
    padding: 5px;
    border-radius: 10px;
    color: white;
`
