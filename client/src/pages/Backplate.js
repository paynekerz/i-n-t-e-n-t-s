import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Auth from "../utils/auth";

import Header from "../components/Header";
import Home from "./Home";
import Search from "./Search";
import Blogs from "./Blogs";
import SingleThought from "./SingleThought";
import Footer from "../components/Footer";


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

function Backplate() {
    return (
      <ApolloProvider client={client}>
        <Router>
          
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />


            <div className="container">

                <Route exact path="/"><Home /></Route>

                <Route exact path="/search"><Search /></Route>
                
                <Route exact path="/blog"><Blogs /></Route>

                <Route exact path="/thoughts/:thoughtId"><SingleThought /></Route>
                    

            </div>
            <Footer />
          </div> 
         
                </Router>
    </ApolloProvider>
  );
}

export default Backplate;