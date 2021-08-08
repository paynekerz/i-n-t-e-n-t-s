import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./icons.js";
import "./style.css";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";


import Header from "./components/Header.js";
import HomePage from "./pages/HomePage";
import ParkBlogPage from "./pages/ParkBlogPage";
import ParkInfoPage from "./pages/ParkInfoPage";
import ParksPage from "./pages/ParksPage";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" exact component={authLink==true?HomePage:LoginPage} />

        <LoggedIn>
        <Header>
        <Route/>
        <Route/>
        <Route/>
        </Header> 
        <Switch>
        <Route path="/ParkBlogPage" exact component={ParkBlogPage} />
        <Route path="/ParkInfoPage" exact component={ParkInfoPage} />
        <Route path="/parks" exact component={ParksPage} />
        </Switch>
        </LoggedIn>

    </Switch>

    </Router>
    </ApolloProvider>
  );
}

const LoggedIn = styled.div``

export default App;
