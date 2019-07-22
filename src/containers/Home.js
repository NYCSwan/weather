import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Search from "../views/Search";
import Weather from "../views/Weather";
import CityList from "../cityList.json";
/*
- render empty form
- ask for location
- fill in form with location details
- click to search
-display details
- graph details
*/
function Home({ match }) {
  const [weather, setWeather] = useState({});
  const [lat, setLatitude] = useState("");
  const [long, setLongitude] = useState("");
  const [location, setCity] = useState("");
  const [cityCode, setCityCode] = useState("");

  const [searchBy, updateSearchParams] = useState("coordinates");

  // TODO: error handling
  const { latitude, longitude, error } = usePosition();

  function fetchCityCode(location) {
    const code = CityList.find(city => {
      return city.name.toLowerCase() === location.toLowerCase();
    });
    if (code) {
      setCityCode(code.id);
    }
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    let result;
    let weather = {};

    if (searchBy === "city") {
      fetchCityCode(location);
      if (cityCode.length > 1) {
        result = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&&APPID=${
            process.env.REACT_APP_WEATHER_API_KEY
          }`
        );
      } else {
        result = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location},us&&APPID=${
            process.env.REACT_APP_WEATHER_API_KEY
          }`
        );
      }
    } else {
      result = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&&APPID=${
          process.env.REACT_APP_WEATHER_API_KEY
        }`
      );
    }
    weather = await result.json();

    if (weather.cod === "200") {
      setWeather(weather);
    }
  }

  useEffect(() => {
    function initialLatLongParams() {
      console.log("initialLatLongParams");
      setLatitude(latitude);
      setLongitude(longitude);
    }

    if (latitude && longitude && lat.length < 1 && long.length < 1) {
      initialLatLongParams();
    }
  });

  return (
    <Outer>
      <HeaderText>MEGAN'S WEATHER APP</HeaderText>
      <Subtext>
        Rain, rain, go away.. Check the weather to see if you should return to
        bed or go for a hike.
      </Subtext>
      <Main>
        <Route
          exact
          path={match.path}
          render={() => (
            <Search
              onSubmitForm={onSubmitForm}
              longitude={longitude}
              latitude={latitude}
              lat={lat}
              long={long}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              location={location}
              fetchCityCode={fetchCityCode}
              searchBy={searchBy}
              setCity={setCity}
              updateSearchParams={updateSearchParams}
            />
          )}
        />
      </Main>
      <Route path={`${match.path}/:id`} component={Weather} />
      {weather.hasOwnProperty("city") && (
        <Weather weather={weather} match={match} />
      )}
    </Outer>
  );
}

const Outer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 5rem;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: scroll;
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
  flex-flow: column wrap;
  width: 90%;
  height: 100%;
  justify-content: center';
  margin-bottom: 4%;
`;

export default Home;
