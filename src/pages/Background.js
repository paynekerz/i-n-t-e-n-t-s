import React from "react";
import styled, { css } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "../style.css";

import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

import Header from "../components/Header.js";
import HomePage from "./HomePage";
import ParkBlogPage from "./ParkBlogPage";
import ParkInfoPage from "./ParkInfoPage";
import ParksPage from "./SearchResultsPage";

import Auth from "../utils/auth";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from "@apollo/client";
  
  import { setContext } from "@apollo/client/link/context";
  

{/* <Router>
        <Header>
          <Route />
          <Route />
          <Route />
        </Header>
        <Switch>
          <Route
            exact path="/"
            render={() => (
              Auth.loggedIn()
              ? 
              (<HomePage><p>AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</p></HomePage>) 
              : 
              (<Redirect component={LoginPage} />)
            )
          }
          />

          <LoggedIn>
            <Switch>
              <Route path="/ParkBlogPage" exact component={ParkBlogPage} />
              <Route path="/ParkInfoPage" exact component={ParkInfoPage} />
              <Route path="/parks" exact component={ParksPage} />
            </Switch>
          </LoggedIn>
        </Switch>
      </Router> */}


      function Background(props) {
        return (
          <Container>
              <h1>HELLO WORLD</h1>
          </Container>
        );
      }

      const Container = styled.div``

      export default Background;