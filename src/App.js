import React from "react";
import logo from "./logo.svg";
import "./App.css";
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
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppContainer>
          <Route exact path="/" component={Home} />
        </AppContainer>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
