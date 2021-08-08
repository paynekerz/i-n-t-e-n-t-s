import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import LastPostBox from "../components/LastPostBox";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function ParkInfoPage(props) {
  return (
    <Container>
      <Header
        style={{
          height: 147,
          width: 414
        }}
      ></Header>
      <ScrollArea>
        <ParkName>PARK NAME</ParkName>
        <Image src={require("../assets/images/a7wZjOw_700bwp1.jpg")}></Image>
        <LastPostBox
          style={{
            height: 83,
            width: 340,
            marginTop: 264,
            marginLeft: 17,
            flex: "0 0 auto"
          }}
        ></LastPostBox>
        <PrevArrowRow>
          <EntypoIcon
            name="chevron-small-left"
            style={{
              color: "rgba(113,129,97,1)",
              fontSize: 60
            }}
          ></EntypoIcon>
          <EntypoIcon
            name="add-to-list"
            style={{
              color: "rgba(113,129,97,1)",
              fontSize: 60,
              marginLeft: 80
            }}
          ></EntypoIcon>
          <EntypoIcon
            name="chevron-small-right"
            style={{
              color: "rgba(113,129,97,1)",
              fontSize: 60,
              marginLeft: 80
            }}
          ></EntypoIcon>
        </PrevArrowRow>
        <ParkInfoHere>PARK INFO HERE</ParkInfoHere>
      </ScrollArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(49,65,49,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  width: 375px;
  height: 731px;
  background-color: rgba(32,32,32,1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  flex-direction: column;
  display: flex;
  margin-top: 18px;
  margin-left: 20px;
  box-shadow: 3px 3px 10px  1px rgba(0,0,0,1) ;
`;

const ParkName = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 24px;
  text-align: center;
  margin-top: 15px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 100%;
  margin-top: 11px;
  flex: 0 0 auto;
  object-fit: contain;
  display: flex;
  flex-direction: column;
`;

const PrevArrowRow = styled.div`
  height: 66px;
  flex-direction: row;
  display: flex;
  margin-left: 17px;
  margin-right: 18px;
  flex: 0 0 auto;
`;

const ParkInfoHere = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  height: 532px;
  width: 340px;
  margin-left: 17px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

export default ParkInfoPage;
