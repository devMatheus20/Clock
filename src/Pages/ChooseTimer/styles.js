import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0B0A17;
    min-height: calc(100vh - 165px);   
    padding: 50px 0;

    @media(max-width:900px) {
        min-height: calc(100vh - 135px)
    }

    h2 {
        color: #fafafa;
        font-size: 30px;

        @media(max-width: 580px) {
            font-size: 25px;
        }
    }

    button {
        background-color: transparent;
        padding: 10px 60px;
        border: 1px solid #00BFFF;
        border-radius: 6px;
        font-size: 20px;
        color: #fafafa;
        transition: 0.3s;
        cursor: pointer;

        :hover {
            background-color: #00BFFF;
            color: #000;
        }
    }
`

export const ChooseTimer = styled.div`
    display: flex;
    gap: 30px;
    margin: 70px 0;

    @media(max-width: 580px) {
        flex-direction: column;
    }

    .hours, .minutes, .seconds {
        display: flex;
        align-items: center
    }

    .icons-arrow {
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        margin-bottom: 15px;
        color: #303030;
        font-size: 25px;
        cursor: pointer;

        :hover {
            color: #00BFFF;
        }

        :active {
            opacity: 0.6;
        }

        @media(max-width: 580px) {
            font-size: 20px;
        }
    }

    .texts {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .texts span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  #303030;
        width: 120px;
        height: 100px;
        box-shadow: -1px 5px 5px -4px rgb(0 0 0 / 80%);
        border-radius: 8px;
        font-size: 80px;
        font-weight: 700;
        color: #fafafa;

        ::selection {
            background-color: transparent;
        }


        @media(max-width: 580px) {
            width: 100px;
            height: 80px;
            font-size: 40px;
            font-weight: 700;
        }
    }

    .texts p {
        margin-top: 5px;
        text-align: center;
        color: #fafafa;
    }

    @media(max-width: 580px) {
        margin: 60px 0 60px -25px;
    }
`