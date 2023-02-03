const API_KEY = "bee6548b888d47988660175cf45859c9"

const getFormattedWeatherData = async (city) =>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    const data = await fetch(URL)
        .then((res)=>res.json())
        .then((data)=>data)

    const {
        weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,

    } = data;

    const {description} = weather[0]

    return{
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
        description
    }
}

export {getFormattedWeatherData}