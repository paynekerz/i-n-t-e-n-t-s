import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import LastPostBox from "../components/LastPostBox";

function ParkBlogPage(props) {
  return (
    <Container>
      <Header
        style={{
          height: 147,
          width: 414
        }}
      ></Header>
      <ScrollArea1>
        <TextBgStack>
          <TextBg></TextBg>
          <TextInput placeholder="Say somethin..."></TextInput>
        </TextBgStack>
        <IoniconsIcon
          name="ios-add-circle-outline"
          style={{
            color: "rgba(113,129,97,1)",
            fontSize: 60,
            marginTop: 108,
            marginLeft: 163,
            flex: "0 0 auto"
          }}
        ></IoniconsIcon>
        <LastPostBox
          style={{
            height: 83,
            width: 340,
            marginTop: 4,
            marginLeft: 17,
            flex: "0 0 auto"
          }}
        ></LastPostBox>
        <LastPostBox
          style={{
            height: 83,
            width: 340,
            marginTop: 18,
            marginLeft: 17,
            flex: "0 0 auto"
          }}
        ></LastPostBox>
        <LastPostBox
          style={{
            height: 83,
            width: 340,
            marginTop: 22,
            marginLeft: 17,
            flex: "0 0 auto"
          }}
        ></LastPostBox>
      </ScrollArea1>
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

const ScrollArea1 = styled.div`
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

const TextBg = styled.div`
  top: 0px;
  left: 0px;
  width: 373px;
  height: 53px;
  position: absolute;
  background-color: rgba(49,65,49,1);
`;

const TextInput = styled.input`
  font-family: Saira Stencil One;
  top: 7px;
  left: 6px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(32,32,32,1);
  height: 48px;
  width: 362px;
  border: none;
  background: transparent;
`;

const TextBgStack = styled.div`
  width: 373px;
  height: 55px;
  margin-top: 51px;
  margin-left: 1px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default ParkBlogPage;
