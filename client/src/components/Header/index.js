import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import Auth from "../../utils/auth";

const Header = () => {
  let authData = Auth.getProfile().data; //.username
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <NavBar>
        <div>
          <Link to="/">
            <h1>
              <Title>
                in
                <b>TENTS</b>
              </Title>
            </h1>
          </Link>
        </div>

          <div style={{display:"flex",alignItems:"center"}}><Link className=" btn-lg m-2" to="/search">
           find<b>-PARK</b>
          </Link>
          <Link className=" btn-lg m-2" to="/blog">
            my<b>-PAGE</b>
          </Link>
          <Link className=" btn-lg m-2" onClick={logout}>
            log<b>-OUT</b>
          </Link></div>

      </NavBar>
    </header>
  );
};

const Title = styled.div`
:hover{color:#E0A100} 
transition: 0.6s ease; 
font-size: 4rem;
color:#E0A100;
`;
const NavBar = styled.div`
  display:flex;
  justify-content: center;
  align-content: center;

`;

export default Header;
