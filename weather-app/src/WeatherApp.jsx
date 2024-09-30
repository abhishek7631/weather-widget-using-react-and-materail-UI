import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 36.59,
    humidity: 58,
    temp: 32.05,
    tempMax: 32.05,
    tempMin: 32.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Abhishek</h2>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
