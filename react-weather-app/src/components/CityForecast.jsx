import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { weatherData } from "./CityList";


const CityForecast = () => {
    const { city } = useParams();

    let getData = weatherData[city];

    function fetchSIM() {
        const [count, setCount] = useState(0);
        const [loading, setLoading] = useState(true);
        
        if (loading === true) {
            useEffect(() => {
                setTimeout(() => {
                    setCount((count) => count + 1);
                }, 5);
    
                setLoading(false)
            });
        }

        return (<p>Fetching Weather Data...</p>)
    }

    return (
        <>
                <div>
                <h1>{`${city}`}</h1>
                <h2>{`${getData.summary}`}</h2>
                <p>{getData.details}</p>
                </div>
                <Link to="/">Back To Available Forecasts</Link>
        </>
    )
}

export default CityForecast;