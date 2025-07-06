import { useState } from "react";
import { Link, Outlet, useParams } from "react-router";

export const weatherData = {
    NewYork: {
        summary: "Sunny, 25°C",
        details: "Clear skies throughout the day with mild temperatures.",
    },
    London: {
        summary: "Cloudy, 18°C",
        details: "Overcast with occasional light rain in the afternoon.",
    },
    Tokyo: {
        summary: "Rainy, 22°C",
        details: "Continuous rain expected throughout the day.",
    },
};


const CityList = () => {
    let { city } = useParams();
    let cities = Object.keys(weatherData);
    // console.log(cities);


    return (
            <div className="container">
            <h1>Available Forecasts:</h1>
                {cities.map((city) =>
                        <p key={city} className="forecast-link">
                            <Link to={`/forecast/${city}`}>{city}</Link>
                        </p>
                )}
            <Outlet />
            </div>
    )
}

export default CityList;