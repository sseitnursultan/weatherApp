import coldBg from './assets/cold.jpg'
import './App.css'
import Main from "./components/Main/Main";
import Footer from './components/footer/Footer'
import {useEffect, useState} from "react";
import {getFormattedWeatherData} from "./weatherService";


function App() {

    const [city, setCity] = useState("London")
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData(city)
            setWeather(data)
        }
        fetchWeatherData()
    }, [city])

    const keyPressed = (e) => {
        if (e.keyCode === 13) {
            setCity(e.currentTarget.value)
        }
    }

    return (
        <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
            <div className={'overlay'}>
                <div className={'Header'}>
                    <input type="text"
                           name={'city'}
                           placeholder={'Enter City...'}
                           className={'searchInput'}
                           onKeyDown={keyPressed}
                    />

                </div>
                <Main weather={weather}/>
                <Footer weather={weather}/>
            </div>

        </div>
    );
}


export default App;
