import React from "react";
import styled from "styled-components";

function CityState({ searchBy, location, setCity }) {
  return (
    <React.Fragment>
      <Label htmlFor="location">
        Location
        <Input
          id="location"
          value={location}
          type="text"
          onChange={e => {
            setCity(e.target.value);
          }}
          onBlur={e => {
            setCity(e.target.value);
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

export default CityState;
