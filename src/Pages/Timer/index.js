import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound";
import * as S from './styles'

import Alarm from '../../Assets/alarm.mp3'
import LocationFacility from '../../Components/Facility/locationFacility'

import { BsFillPlayCircleFill, BsStopCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';

import { Title } from '../../Components/Title/styles'



function Timer() {

    const navigate = useNavigate()

    const [_Alarm] = useSound(Alarm);

    const query = LocationFacility.GetParams();

    const [intervalId, setIntervalId] = useState()
    const [icon, setIcon] = useState(true)

    const [hours, setHours] = useState(Number(query.get('hrs')))
    const [minutes, setMinutes] = useState(Number(query.get('min')))
    const [seconds, setSeconds] = useState(Number(query.get('sec')))

    function startTimer(hrs, min, sec) {

        if (icon === true) {

            const interval = setInterval(() => {

                if (hrs > 0 && min === 0 && sec === 0) {

                    min = 59
                    setMinutes(min)

                    sec = 60
                    setSeconds(sec)

                    hrs -= 1
                    setHours(hrs)
                }

                if (min >= 0) {

                    if (sec > 0) {
                        sec -= 1
                        setSeconds(sec)
                    }

                    if (sec === 0 && min > 0) {
                        sec = 59
                        setSeconds(sec)

                        min -= 1
                        setMinutes(min)
                    }
                }

                if (hrs === false && min === 0 && sec === 0) {
                    _Alarm()
                    clearInterval(interval)
                    setIcon(false)
                    navigate('/choosetimer')
                }

            }, 1000)

            setIcon(false)
            setIntervalId(interval)
        }

        if (icon === false) {
            clearInterval(intervalId)
            setIcon(true)
        }
    }

    function formatTime(hrs, min, sec) {

        if (hrs === 0) {
            setHours(false)
        }

        if (hrs < 10) hrs = `0${hrs}`

        if (min < 10) min = `0${min}`

        if (sec < 10) sec = `0${sec}`

        return `${hours ? `${hrs}:` : ''}${min}:${sec}`
    }

    useEffect(() => {
        startTimer(hours, minutes, seconds)

        // eslint-disable-next-line
    }, [])

    return (

        <>
            <Title>Temporizador</Title>

            <S.ContainerTimer>
                <S.Timer>
                    <div className={icon ? 'nopulse' : 'pulse'} />
                    <h2>{formatTime(hours, minutes, seconds)}</h2>
                </S.Timer>

                <S.ButtonIcon>

                    <button onClick={() => startTimer(hours, minutes, seconds)}>
                        <IconContext.Provider value={{ className: "icon-play-stop" }} >

                            {icon ? <BsFillPlayCircleFill/> : <BsStopCircle/> }

                        </IconContext.Provider>
                    </button>

                </S.ButtonIcon>
            </S.ContainerTimer>
        </>
    )
}


export default Timer