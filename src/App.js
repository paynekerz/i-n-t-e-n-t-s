import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./icons.js";
import "./style.css";

import Header from "./components/Header.js";
import LoginPage from "./pages/LoginPage";
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
    <Router>
    <Header/> 

      <Route path="/" exact component={LoginPage || 
        //if auth = true
        ParksPage} />
      <Switch>
      <Route path="/LoginPage/" exact component={LoginPage} />
      <Route path="/ParkBlogPage/" exact component={ParkBlogPage} />
      <Route path="/ParkInfoPage" exact component={ParkInfoPage} />
      <Route path="/parks" exact component={ParksPage} />
      </Switch>

    </Router>
  );
}

export default App;
