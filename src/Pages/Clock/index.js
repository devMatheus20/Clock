import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './styles'

import { FaCity } from 'react-icons/fa'

import Title from '../../Components/Title'




function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString("pt-BR"))
    const [date, setDate] = useState()

    const [infoIp, setInfo] = useState()

    useEffect(() => {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

        const newDate = new Date()

        const formatDate = `${days[newDate.getDay()]}, ${newDate.getDate()} de ${months[newDate.getMonth()]}`

        setDate(formatDate)
    }, [])


    function fetchTime() {
        const timer = new Date().toLocaleTimeString("pt-BR")
        setTime(timer)
    }

    setInterval(fetchTime, 1000)

    useEffect(() => {
        async function fetchIP() {
            const { data } = await axios.get("https://api64.ipify.org?format=json")

            const { data: info } = await axios.get(`https://api.ipdata.co/${data.ip}?api-key=30e8c9f3189ae14c025784883bfb2819eacfb79012307a329d621fa2`)

            setInfo(info)
        }

        fetchIP()
    }, [])


    return (
        <>
            <Title>Relógio</Title>

            <S.ContainerClock>
                <S.Time>
                    <h2>{time}</h2>
                </S.Time>

                <S.Date>
                    <h3>{date}</h3>
                </S.Date>

                {infoIp ?
                    <S.InfoCountry>

                        <FaCity/>

                        <span>{infoIp.city} - {infoIp.region} - {infoIp.country_name ? 'Brasil' : ''}</span>

                    </S.InfoCountry>

                    :

                    <S.InfoCountry>
                        <h3 className='loading'>carregando...</h3>
                    </S.InfoCountry>
                }
            </S.ContainerClock>

        </>
    )
}


export default Clock