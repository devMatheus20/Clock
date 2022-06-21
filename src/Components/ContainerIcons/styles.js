import styled from 'styled-components'


export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    width: 100%;
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    

    .icons-clock {
        font-size: 35px;
        color: #ccc;
        opacity: 0.8;

        :active{
            opacity: 1;
            color: #fff;
        }

        :hover{
            opacity: 1;
            color: #fff;
        }

        @media(max-width: 580px) {
            font-size: 25px;
        }
    }
`

