import { Link, Outlet, useParams } from "react-router";


const weatherData = {
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
        <>
            <h1>Available Forecasts:</h1>
            <ul>
                {cities.map((city) =>
                        <li key={city}>
                            <Link to={`/${city}`}>{city}</Link>
                        </li>
                )};
            </ul>
            <Outlet />
        </>
    )
}

export default CityList;