import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Search({ onSubmit, latitude, longitude }) {
  const [searchBy, updateSearchParams] = useState("coordinates");

  useEffect(() => {
    // function initialSearchParams() {
  });

  return (
    <SearchContainer>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="searchBy">
          Search By
          <Select
            id="searchBy"
            value={searchBy}
            placeholder="Add an searchBy"
            onChange={e => {
              updateSearchParams(e.target.value);
            }}
            onBlur={e => {
              updateSearchParams(e.target.value);
            }}
            disabled={!searchBy.length}
          >
            <option value="coordinates">Lat/Long Coordinates</option>
            <option value="city">City, State</option>
          </Select>
        </Label>
        <Label htmlFor="lat">
          Latitude
          <Input
            id="lat"
            value={lat}
            type="text"
            onChange={e => {
              setLatitude(e.target.value);
            }}
            onBlur={e => {
              setLatitude(e.target.value);
            }}
            disabled={!searchBy.length}
          />
        </Label>
        <Label htmlFor="long">
          Longitude
          <Input
            id="long"
            value={long}
            type="text"
            onChange={e => {
              setLongitude(e.target.value);
            }}
            onBlur={e => {
              setLongitude(e.target.value);
            }}
            disabled={!searchBy.length}
          />
        </Label>
        <Button>Submit</Button>
      </Form>
    </SearchContainer>
  );
}

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
`;

const Select = styled.select`
  border: 1px solid green;
  font-size: 0.9rem;
  text-align: center;
  margin-left: 15px;
  width: auto;
  height: auto;
  word-break: keep-all;
`;

const Input = styled(Select)`
  padding: 10px;
  width: 100%;
`;

const BtnContainer = styled.div`
  height: 40px;
  width: 110px;
`;

const Button = styled(BtnContainer)`
  align-self: center;
`;
const BtnContainerEnd = styled.div`
  height: 40px;
  width: 110px;
  align-self: flex-end;
`;

export default Search;
