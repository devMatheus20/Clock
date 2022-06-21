import styled, { keyframes } from 'styled-components'



const pulse = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 #CFAF51;
    }
    
    70% {
        transform: scale(1.07);
        box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
    }
    
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
`


export const ContainerTimer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 77vh;   
    min-height: calc(100vh - 165px);    
    background-color: #0B0A17;

    @media(max-width:900px) {
        min-height: calc(100vh - 145px)
    }
`


export const Timer = styled.div`
    position: relative;
    bottom: 16px;
    background-color: #080713;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 390px;
    width: 390px;
    border-radius: 50%;
    box-shadow: 0 0 25px 0 rgba(0,0,0,.2);

    h2 {
        font-size: 70px;
        color: #D8BFD8;
        letter-spacing: 0.5px;

        @media(max-width: 580px) {
            font-size: 60px;
        }
    }

    .nopulse {
        position: absolute;
        z-index: 1;
        border: 3px solid #24a35f;
        width: 330px;
        height: 330px;
        border-radius: 50%;
    }

    .pulse {
        position: absolute;
        border: 3px solid #24a35f;
        width: 330px;
        height: 330px;
        border-radius: 50%;
        animation: ${pulse} 1.3s ease-in-out infinite;
    }
`

export const ButtonIcon = styled.div`
    position: relative;
    top: 20px;
    display: flex;
    gap: 60px;

    button {
        background: transparent;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 50%;
    }

    .icon-play-stop {
        font-size: 60px;
        color: 	#00BFFF;
    }
`