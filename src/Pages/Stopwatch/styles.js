import styled from 'styled-components'


export const ContainerStopWatch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    min-height: calc(100vh - 165px);   
    background-color: #0B0A17;

    @media(max-width:900px) {
        min-height: calc(100vh - 135px)
    }

`


export const Stopwatch = styled.div`
    background-color: #080713;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 380px;
    width: 380px;
    border-radius: 50%;
    border: 2px solid #fafafa;
    box-shadow: 0 0 25px 0 rgba(0,0,0,.2);

    h2 {
        font-size: 80px;
        color: #D8BFD8;
        letter-spacing: 0.5px;

        @media(max-width: 580px) {
            font-size: 60px;
        }
    }
`

export const ButtonIcons = styled.div`
    display: flex;
    gap: 60px;

    button {
        background: transparent;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 50%;
    }

    .icon-stopwatch {
        font-size: 60px;
        color: 	#00BFFF;
    }
`