import React, { Component } from "react";
import styled, { css } from "styled-components";
import ParkCard from "./ParkCard";

function ParksPageScroll(props) {
  return (
    <Container {...props}>
      <ScrollArea>
        <ParkCard
          style={{
            height: 350,
            width: 350,
            marginTop: 35,
            marginLeft: 32,
            flex: "0 0 auto"
          }}
        ></ParkCard>
        <ParkCard
          style={{
            height: 350,
            width: 350,
            marginTop: 51,
            marginLeft: 32,
            flex: "0 0 auto"
          }}
        ></ParkCard>
        <ParkCard
          style={{
            height: 350,
            width: 350,
            marginTop: 48,
            marginLeft: 32,
            flex: "0 0 auto"
          }}
        ></ParkCard>
      </ScrollArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  width: 414px;
  height: 749px;
  background-color: rgba(49,65,49,1);
  flex-direction: column;
  display: flex;
  margin-left: 1px;
`;

export default ParksPageScroll;
