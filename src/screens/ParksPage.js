import React, { Component } from "react";
import styled, { css } from "styled-components";
import ParksPageScroll from "../components/ParksPageScroll";
import Header from "../components/Header";

function ParksPage(props) {
  return (
    <Container>
      <ParksPageScroll
        style={{
          height: 896,
          width: 414,
          marginTop: 147
        }}
      ></ParksPageScroll>
      <Header
        style={{
          height: 147,
          width: 414,
          marginTop: -1043
        }}
      ></Header>
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

export default ParksPage;
