import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./containers/Home";
import Footer from "./views/Footer";
import Header from "./views/Header";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

function App() {
  return (
    <Router>
      <Header />
      <AppContainer>
        <Route exact path="/" component={Home} />
      </AppContainer>
      <Footer />
    </Router>
  );
}

export default App;
