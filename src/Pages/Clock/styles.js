import styled from 'styled-components'


export const ContainerClock = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #0B0A17;
    min-height: calc(100vh - 165px);    

    @media(max-width:900px) {
        min-height: calc(100vh - 135px)
    } 
`

export const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #353535;
    height: 100px;
    width: 90%;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 0 25px 0 rgba(0,0,0,.7);

    h2 {
        font-size: 70px;
        color: #fafafa;
        letter-spacing: 0.5px;

        @media(max-width: 580px) {
            font-size: 60px;
        }
    }
`

export const Date = styled.div`
    display: block;
    margin-top: 10px;
    margin-left: 5.5%;

    h3 {
        font-size: 20px;
        color: #fafafa;
        letter-spacing: 0.5px;  

        @media(max-width: 580px) {
            font-size: 15px;
        }
    }
`


export const InfoCountry = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 130px;
    text-align: center;
    font-size: 22px;
    color: #00BFFF;
    letter-spacing: 0.5px;  
    word-spacing: 1px;

    @media(max-width: 580px) {
        font-size: 20px;
        margin-top: 170px;
    }
`