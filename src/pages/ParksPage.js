import React, { Component } from "react";
import styled, { css } from "styled-components";
import ParksPageScroll from "../components/ParksPageScroll";
import Header from "../components/Header";
import ParkCard from "../components/ParkCard"

function ParksPage(props) {
  return (
    <Container>

      <Header
        style={{
          height: 147,
          width: 414,
          marginTop: -1043
        }}
      ></Header>

      {/* <ParksPageScroll
        style={{
          // height: 100hv,
          // width: 414,
          marginTop: 147
        }}
      ></ParksPageScroll> */}

<ParkCard
          style={{
            height: 350,
            width: 350,
            marginTop: 35,
            marginLeft: 32,
            flex: "0 0 auto"
          }}
        ></ParkCard>


    </Container>
  );
}

const Container = styled.div`
  display: flex;
  // background-color: rgba(49,65,49,1);
  flex-direction: column;
  // height: 100vh;
  // width: 100vw;
`;

export default ParksPage;
