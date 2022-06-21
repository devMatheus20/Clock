import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';

import Title from '../../Components/Title'


function ChooseTimer() {

    const navigate = useNavigate()

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    function navigateTo() {
        if(hours !== 0 || minutes !== 0 || seconds !== 0) {
            navigate(`/timer/?hrs=${hours}&min=${minutes}&sec=${seconds}`)
        } else {
            alert("Insira um valor")
        }
    }

    return (
        <>
            <Title>Temporizador</Title>

            <S.Container>
                <h2>Escolha um tempo:</h2>

                <S.ChooseTimer>
                    <div className='hours'>
                        <div>
                            <IconContext.Provider value={{ className: "icons-arrow" }} >
                                <BsFillArrowUpCircleFill onClick={() => setHours(hours + 1)} />
                                <BsFillArrowDownCircleFill onClick={() => { if (hours > 0) setHours(hours - 1) }} />
                            </IconContext.Provider>
                        </div>

                        <div className='texts'>
                            <span>{hours}</span>
                            <p>Horas</p>
                        </div>
                    </div>

                    <div className='minutes'>
                        <div>
                            <IconContext.Provider value={{ className: "icons-arrow" }} >
                                <BsFillArrowUpCircleFill onClick={() => setMinutes(minutes + 1)} />
                                <BsFillArrowDownCircleFill onClick={() => { if (minutes > 0) setMinutes(minutes - 1) }} />
                            </IconContext.Provider>
                        </div>

                        <div className='texts'>
                            <span>{minutes}</span>
                            <p className='text'>Minutos</p>
                        </div>
                    </div>

                    <div className='seconds'>
                        <div>
                            <IconContext.Provider value={{ className: "icons-arrow" }} >
                                <BsFillArrowUpCircleFill onClick={() => setSeconds(seconds + 1)} />
                                <BsFillArrowDownCircleFill onClick={() => { if (seconds > 0) setSeconds(seconds - 1) }} />
                            </IconContext.Provider>
                        </div>

                        <div className='texts'>
                            <span>{seconds}</span>
                            <p>Segundos</p>
                        </div>
                    </div>
                </S.ChooseTimer>
                <button onClick={navigateTo}>Começar</button>
            </S.Container>
        </>
    )
}


export default ChooseTimer