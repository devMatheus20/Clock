import React, { useState } from 'react'
import * as S from './styles'

import { BiReset } from 'react-icons/bi'
import { BsFillPlayCircleFill, BsStopCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';

import Title from '../../Components/Title'


function Stopwatch() {

    const [icon, setIcon] = useState(true)
    const [intervalId, setIntervalId] = useState()

    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milesimos, setMile] = useState(0)


    function start(min, sec, mile) {

        if (icon === true) {
            const interval = setInterval(() => {

                mile += 1
                setMile(mile)

                if (mile === 100) {
                    mile = 0
                    setMile(mile)

                    sec += 1
                    setSeconds(sec)
                }

                if (sec === 60) {
                    sec = 0
                    setSeconds(sec)

                    min += 1
                    setMinutes(min)
                }
            }, 10)

            setIntervalId(interval)
            setIcon(false)
        }

        if (icon === false) {
            clearInterval(intervalId)
            setIcon(true)
        }
    }

    function clear() {
        if (icon === false) setIcon(true)

        clearInterval(intervalId)
        setMinutes(0)
        setSeconds(0)
        setMile(0)
    }

    function formatTime(min, sec, mil) {
        if (mil < 10) mil = `0${mil}`

        if (sec < 10) sec = `0${sec}`

        if (min < 10) min = `0${min}`

        return `${min}:${sec}:${mil}`
    }

    return (
        <>
            <Title>Cronômetro</Title>

            <S.ContainerStopWatch>
                <S.Stopwatch>
                    <h2>{formatTime(minutes, seconds, milesimos)}</h2>
                </S.Stopwatch>

                <S.ButtonIcons>

                    <button onClick={() => start(minutes, seconds, milesimos)}>
                        <IconContext.Provider value={{ className: "icon-stopwatch" }} >
                            {icon ? <BsFillPlayCircleFill /> : <BsStopCircle />}
                        </IconContext.Provider>
                    </button>

                    <button onClick={clear}>
                        <IconContext.Provider value={{ className: "icon-stopwatch" }} >
                            <BiReset />
                        </IconContext.Provider>
                    </button>

                </S.ButtonIcons>
            </S.ContainerStopWatch>
        </>
    )
}


export default Stopwatch