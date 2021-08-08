import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function ParkCard(props) {
  return (
    <Container {...props}>
      <Link to="/ParksPage">
        <ParkContainer>
          <ButtonOverlay>
            <Lon>LON:000</Lon>
            <Lat>LAT:000</Lat>
            <Address>ADDRESS, CITY,{"\n"}SC 00000</Address>
            <Parkname>PARKNAME</Parkname>
          </ButtonOverlay>
        </ParkContainer>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const ParkContainer = styled.div`
  background-color: rgba(32,32,32,1);
  border-radius: 25px;
  overflow: visible;
  height: 350px;
  flex-direction: column;
  display: flex;
  border: none;
  box-shadow: 3px 3px 10px  1px rgba(0,0,0,1) ;
`;

const Lon = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 21px;
  margin-top: 34px;
  margin-left: 8px;
`;

const Lat = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 21px;
  margin-left: 8px;
`;

const Address = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 21px;
  margin-top: 42px;
  margin-left: 8px;
`;

const Parkname = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 54px;
  margin-top: 57px;
  margin-left: 25px;
`;

export default ParkCard;
