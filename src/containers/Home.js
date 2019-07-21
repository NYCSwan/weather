import React, { useState, useEffect } from "react";

import styled from "styled-components";
/*
- render empty form
- ask for location
- fill in form with location details
- click to search
-display details
- graph details
*/
function Home({ match }) {
  return (
    <Outer>
      <HeaderText>Header text</HeaderText>
      <Main>
        <text>Main</text>
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
