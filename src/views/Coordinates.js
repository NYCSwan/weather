import React from "react";
import styled from "styled-components";

function Coordinates({
  lat,
  long,
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  searchBy
}) {
  return (
    <React.Fragment>
      <Label htmlFor="lat">
        Latitude
        <Input
          id="lat"
          value={lat}
          placeholder={latitude}
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
          placeholder={longitude}
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
    </React.Fragment>
  );
}

const Label = styled.label`
  font-size: 1rem;
  text-align: left;
  width: 100%;
  padding: 10px;
  padding-bottom: 15px;
`;

const Input = styled.input`
  border: 1px solid green;
  font-size: 0.9rem;
  text-align: center;
  margin-left: 15px;
  width: 100%;
  height: auto;
  word-break: keep-all;
  padding: 10px;
`;

export default Coordinates;
