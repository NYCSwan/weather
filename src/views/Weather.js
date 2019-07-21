import React from "react";
import styled from "styled-components";

function Weather({ match, weather }) {
  return (
    <WeatherContainer key={match.params.id}>
      <HeaderText>{weather.city.name.toUpperCase()}</HeaderText>
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
