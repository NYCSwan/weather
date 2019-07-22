import React from "react";
import styled from "styled-components";
import Coordinates from "./Coordinates";
import CityState from "./CityState";

const Search = ({
  onSubmitForm,
  latitude,
  longitude,
  lat,
  long,
  setLatitude,
  setLongitude,
  location,
  setCity,
  fetchCityCode,
  searchBy,
  updateSearchParams
}) => {
  return (
    <SearchContainer>
      <Form
        onSubmit={e => {
          if (searchBy === "city") {
            fetchCityCode(location);
          }
          onSubmitForm(e);
        }}
      >
        <Label htmlFor="searchBy">
          Search By
          <Select
            id="searchBy"
            value={searchBy}
            onChange={e => {
              updateSearchParams(e.target.value);
            }}
            onBlur={e => {
              updateSearchParams(e.target.value);
            }}
            disabled={!searchBy.length}
          >
            <Option value="coordinates">Lat/Long Coordinates</Option>
            <Option value="city">City, State</Option>
          </Select>
        </Label>
        {searchBy === "coordinates" ? (
          <Coordinates
            lat={lat}
            long={long}
            latitude={latitude}
            longitude={longitude}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            searchBy={searchBy}
          />
        ) : (
          <CityState
            searchBy={searchBy}
            location={location}
            setCity={setCity}
          />
        )}
        <Button>Submit</Button>
      </Form>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  padding-top: 3%;
  height: 100%;
  width: auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
const Label = styled.label`
  font-size: 1rem;
  text-align: left;
  width: 100%;
  padding: 10px;
`;

const Select = styled.select`
  padding-top: 15px;
  border: 1px solid green;
  font-size: 0.9rem;
  text-align: center;
  margin-left: 15px;
  width: 100%;
  height: auto;
  word-break: keep-all;
  padding: 10px;
`;

const Option = styled.option`
  padding: 10px;
  color: mediumgray;
`;

const Button = styled.button`
  height: 40px;
  width: 80%;
  align-self: center;
  background-color: navy;
  color: #eeeeee;
`;

export default Search;
