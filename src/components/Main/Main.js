import React, {useEffect, useState} from 'react';
import './Main.css'
import img from '../../assets/cloudy-weather.png'


function Main ({weather}) {
    if(!weather){
        return (
            <div className={'Main'}>
                <div className={'leftMain'}>
                    <h3></h3>
                    <img src={img} alt="cloudyImg"/>
                    <h3></h3>
                </div>
                <div>
                    <h1>C</h1>
                </div>
            </div>
        )
    }

    return (
        <div className={'Main'}>
            <div className={'leftMain'}>
                <h3>{weather.name}</h3>
                <img src={img} alt="cloudyImg"/>
                <h3>{weather.description}</h3>
            </div>
            <div>
                <h1>{Math.round(weather.temp - 273.15)} C</h1>
            </div>
        </div>
    );
};

export default Main;