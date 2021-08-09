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

                {/* LINKS TO HOME SEARCH AND BLOG */}

            <div className="container">

                <Route exact path="/"><Home /></Route>

                    {/* 
                    LAST PARK USER POSTED ON
                    ALSO SHOWS USERS MOST RECENTLY COMMENTED ON POST 
                    */}

                <Route exact path="/search"><Search /></Route>

                    {/* 
                    SEARCH SELECTIONS FOR PARK 
                    AND DISPLAYS RESULTS (NAME LON LAT ADDRESS DISTANCE) RESULTS WILL DYNAMICALLY LINK TO A UNIQUE INFO PAGE 
                    INFO PAGE WILL LINK TO A UNIQUE BLOG FOR THE SELECTED PARK
                    ANY BLOG POSTS ASSOCIATED WITH THAT PARK WILL BE DISPLAYED AS WELL AS A WINDOW THE USER CAN WRITE IN
                    */}

                <Route exact path="/thoughts/:thoughtId"><SingleThought /></Route>
                    
                    {/* 
                    SHOWS ALL USERS POSTS - NEED TO REFACTOR TO BE CALLED BLOG 
                    */}

            </div>
            <Footer />
          </div> 
         
                </Router>
    </ApolloProvider>
  );
}

export default Backplate;