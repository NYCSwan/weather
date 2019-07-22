import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "./Chart";
import moment from "moment";

function Weather({ match, weather }) {
  const [sortedWeatherData, setWeatherData] = useState([]);

  useEffect(() => {
    function sortWeather() {
      const data = weather.list.map(data => {
        // {date: 'Mon, 2nd', uv: 400, humidity: 35, pressure: 100},
        const mom = moment(data.dt).format("Do, h:mm");

        let newData = {
          date: mom,
          uv: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure
        };
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
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h3`
  font-size: 1rem;
  line-height: 1.5rem;
  width: auto;
`;

export default Weather;
