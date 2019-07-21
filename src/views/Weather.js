import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "./Chart";

function Weather({ match, weather }) {
  const [sortedWeatherData, setWeatherData] = useState([]);

  useEffect(() => {
    function sortWeather() {
      const len = weather.list.length - 1;
      debugger;
      const data = weather.list.map(data => {
        // {date: 'Mon, 2nd', uv: 400, amt: 2400},
        console.log(data);
        let newData = { date: data.dt, uv: data.main.temp, amt: len };
        return newData;
      });
      setWeatherData(data);
    }
    if (sortedWeatherData.length < 1) {
      sortWeather();
    }
  });

  return (
    <WeatherContainer key={match.params.id}>
      <HeaderText>{weather.city.name.toUpperCase()} WEATHER</HeaderText>
      <Chart weather={sortedWeatherData} />
    </WeatherContainer>
  );
}

const WeatherContainer = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-flow: column wrap;
`;

const HeaderText = styled.h3`
  font-size: 1rem;
  line-height: 1.5rem;
  width: auto;
`;

export default Weather;
