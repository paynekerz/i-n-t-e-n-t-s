import React, { Component } from "react";
import styled, { css } from "styled-components";
import {NavLink} from 'react-router-dom';


function Header(props) {
  return (
    <Container {...props}>
      <Header1 style={{textAlign:"center",}}><h1><a href="./" id="h-in">IN<b id="h-tents">TENTS</b></a></h1></Header1>

      <Search/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Search = styled.div``


const Header1 = styled.div`
  width: 100%;
  height: 145px;
  background-color: rgba(113,129,97,1);
  flex-direction: row;
  display: flex;
  text-align: center;
  box-shadow: 0px 2px 10px  1px rgba(0,0,0,1) ;
`;


export default Header;
