import React, {useState} from 'react';
import './Footer.css'
import {AiOutlineArrowUp, AiOutlineArrowDown,} from 'react-icons/ai'
import {FaTemperatureLow} from 'react-icons/fa'
import {CiTempHigh} from 'react-icons/ci'
import {WiHumidity} from 'react-icons/wi'
import {GiWindSlap} from 'react-icons/gi'

const Footer = ({weather}) => {



    if(!weather ) {

        const cards = [{
            id: 1,
            icon: <AiOutlineArrowDown/>,
            description: 'min',
            data: ' C'
        },
            {
                id: 2,
                icon: <AiOutlineArrowUp/>,
                description: 'max',
                data:' C'
            },
            {
                id: 3,
                icon: <FaTemperatureLow/>,
                description: "Feel's like",
                data:' C'
            },
            {
                id:4,
                icon:<CiTempHigh/>,
                description: 'Pressure',
                data:' hPa'
            },
            {
                id:5,
                icon: <WiHumidity/>,
                description: 'Humidity',
                data: ' %'
            },
            {
                id:6,
                icon:<GiWindSlap/>,
                description: 'Wind Speed',
                data:'m/s'
            }
        ]


        return (
            <div className={'Footer'}>
                {cards.map(({id,icon,description,data})=>(
                    <div key={id} className={'Card'}>
                        <div className={'upSide'}>
                            <i>{AiOutlineArrowUp}</i>
                            <p>Temp Max</p>
                        </div>
                        <div className={'downSide'}>
                            <p>23C</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    else {
        const cards = [{
            id: 1,
            icon: <AiOutlineArrowDown/>,
            description: 'min',
            data: Math.round(weather.temp_max-273.15) + ' C'
        },
            {
                id: 2,
                icon: <AiOutlineArrowUp/>,
                description: 'max',
                data: Math.round(weather.temp_max-273.15) + ' C'
            },
            {
                id: 3,
                icon: <FaTemperatureLow/>,
                description: "Feel's like",
                data: Math.round(weather.feels_like-273.15) + ' C'
            },
            {
                id:4,
                icon:<CiTempHigh/>,
                description: 'Pressure',
                data:weather.pressure + ' hPa'
            },
            {
                id:5,
                icon: <WiHumidity/>,
                description: 'Humidity',
                data:weather.humidity + ' %'
            },
            {
                id:6,
                icon:<GiWindSlap/>,
                description: 'Wind Speed',
                data: weather.speed + 'm/s'
            }
        ]

        return (
            <div className={'Footer'}>
                {cards.map(({id,icon,description,data})=>(
                    <div key={id} className={'Card'}>
                        <div className={'upSide'}>
                            <i>{icon}</i>
                            <p>{description}</p>
                        </div>
                        <div className={'downSide'}>
                            <p>{data}</p>
                        </div>
                    </div>
                ))}
            </div>
        );

    }


};

export default Footer;