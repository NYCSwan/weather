import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import styled from "styled-components";
import Search from "../views/Search";
/*
- render empty form
- ask for location
- fill in form with location details
- click to search
-display details
- graph details
*/
function Home({ match }) {
  const [loading, isLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    true,
    { enableHighAccuracy: true }
  );

  async function onSubmit(e) {
    e.preventDefault();

    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${
        process.env
      }`
    );
    let weather = await result.json();
    // weather = formatTacoResults(weather);

    return weather;
  }

  useEffect(() => {
    function initialSearchParams() {}
  });

  return (
    <Outer>
      <HeaderText>MEGAN'S WEATHER APP</HeaderText>
      <Subtext>
        Rain, rain, go away.. Check the weather to see if you should return to
        bed or go for a hike.
      </Subtext>
      <Main>
        <Search onSubmit={onSubmit} longitude={longitude} latitude={latitude} />
      </Main>
    </Outer>
  );
}

const Outer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 5rem;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
`;

const Img = styled.img`
  height: auto;
  width: 30%;
`;

const HeaderText = styled.h3`
  font-size: 1rem;
  line-height: 1.5rem;
  width: auto;
`;

const Subtext = styled.h3`
  font-size: 0.8rem;
  line-height: 1.2rem;
  width: auto;
`;

const Main = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
  width: 90%;
  height: 100%;
  justify-content: center';
  margin-bottom: 4%;
`;

const SearchContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: visible;
`;

export default Home;
