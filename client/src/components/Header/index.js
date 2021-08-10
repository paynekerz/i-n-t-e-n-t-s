import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import styled, { css } from "styled-components";

import Auth from "../../utils/auth";

const Header = () => {
  let authData = Auth.getProfile().data; //.username
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>

      <div >
        <Link to="/">
          <h1 className="title">
            in<b>TENTS</b>
          </h1>
        </Link>
      </div>

      <div >
        <div className="bar">
          <Link className="navItem" to="/search">
            find<b>PARK</b>
          </Link>
          <Link className="navItem" to="/blog">
            my<b>PROFILE</b>
          </Link>
          <Link className="logOut" onClick={logout}>
            log<b>OUT</b>
          </Link>
        </div>
      </div>

    </header>
  );
};

const Title = styled.div`

  transition: 0.6s ease;
  font-size: 4rem;

`;
const NavBar = styled.div`
  // display:flex;
  // justify-content: center;
  align-content: center;
`;

export default Header;
