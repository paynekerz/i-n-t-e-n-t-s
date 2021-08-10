import React from "react";
import styled, { css } from "styled-components";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Auth from "./utils/auth";

import Backplate from "./pages/Backplate";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Blogs from "./pages/Blogs";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>

          <Route
            path="/login"
            render={() => (Auth.loggedIn() ? <Redirect to="/" /> : <Login />)}
          />

          <Route
            path="/"
            render={() =>
              Auth.loggedIn() ? <Backplate /> : <Redirect to="/login" />
            }
          />

          <Route path="/signup">
            <Signup />
          </Route>



        </div>
      </Router>
    </ApolloProvider>
  );
}




export default App;
